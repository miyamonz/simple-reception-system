<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

if(getenv('APP_ENV') === 'development'){
	sleep(1);
}
$json_string = file_get_contents('php://input');

$file = 'data.json';

if($json_string) {
  //put
  $ok = file_put_contents($file, $json_string);
  if(!$ok) {
    http_response_code( 501 ) ;
    echo "保存できませんでした";
  }
  return;
} else {
  //get
  echo file_get_contents($file);
  return;
}
