<?php
header('Content-Type: text/html; charset=UTF-8');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");


echo getenv('API_PORT');
$folder = basename(getcwd());
$port = $folder === 'test-2019' ? 8000 : 8080;
$url = getenv('APP_ENV') === 'development' ? './api/' : "http://os3-373-19830.vs.sakura.ne.jp:${port}/api/";
include "./display.html";

