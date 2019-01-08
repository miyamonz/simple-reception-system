<?php
header('Content-Type: text/html; charset=UTF-8');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");


$folder = basename(getcwd());
$port = $folder === 'test-2019' ? 8000 : 8080;
$url = getenv('APP_ENV') === 'development' ? "./api/data.json" : "http://os3-373-19830.vs.sakura.ne.jp:${port}/api/";

$state = json_decode(file_get_contents($url));
$accepting = $state->accepting;
$call_num = $state->calling;

$today  = str_replace("\n","<br>",$state->comments->today);
$always = str_replace("\n","<br>",$state->comments->always);

$joukyou = "";
$comment = "";
if($accepting){
  if($call_num > 0) {
    $joukyou .= "<span style='font-weight: bold; font-size:30px'>{$call_num}番</span>を呼び出し中です。<br> "; 

  }else {
    $joukyou .= "受付開始までお待ち下さい<br> "; 
  }
  $comment .= "<p>${today}</p>";
}
else  {
  $joukyou .= '本日の診療は<font color="red">終了</font>しました<br>';
}
$comment .= "<p>${always}</p>";
include "./keitai.html";
