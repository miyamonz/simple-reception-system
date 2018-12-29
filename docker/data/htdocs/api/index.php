<?php
if(getenv('APP_ENV') === 'development'){
	sleep(1);
}
$json_string = file_get_contents('php://input');

$file = 'data.json';

if($json_string) {
  //put
  file_put_contents($file, $json_string);
  return;
} else {
  //get
  echo file_get_contents($file);
  return;
}
