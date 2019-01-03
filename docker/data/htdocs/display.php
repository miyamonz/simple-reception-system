<?php
header('Content-Type: text/html; charset=UTF-8');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");


$url = getenv('APP_ENV') === 'development' ? "./api/data.json" : "http://os3-373-19830.vs.sakura.ne.jp:8000/api/";
include "./display.html";
