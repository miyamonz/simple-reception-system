<?php
header('Content-Type: text/html; charset=UTF-8');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$end_text = '本日の診療は<font color="red">終了</font>しました<br>';

$state = file_get_contents("./api/data.json" );

include "./keitai.html";
