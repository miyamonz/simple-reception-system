<?php
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
