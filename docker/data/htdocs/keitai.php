<?php
header('Content-Type: text/html; charset=UTF-8');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$end_text = '本日の診療は<font color="red">終了</font>しました<br>';
?>
<html> 
  <head> 
    <meta name="viewport" content="width=device-width">
    <title>はまぐち皮膚科</title>
    <style>
    header {
      color: red;
    }
    header:before, header:after {
      color: green;
      content: '■';
    }
    section {
    padding-bottom: 15px;
    }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
    <script>
    let state = <?=  file_get_contents("./api/data.json" ) ?>;
    </script>
  </head>
  <body text="#000000" link="blue" vlink="blue" bgcolor="#F7F7D7">
    <div align="center">
      <section style="color:green">
        <font>はまぐち皮膚科</font><br>
        <font>公式WEBページ</font><br>
      </section>
      <hr>

      <section style="color: maroon">
        <header>診察時間</header>
        <font>9:30～12:00</font><br>
        <font>15:30～18:00</font><br>
        <span style="color:black">※月曜のみ19時30分まで</span>
      </section>

      <section style="color: maroon">
        <header>休診日</header>
        <font>日曜日・祝祭日</font><br>
        <font>水曜日・土曜日午後</font><br>
      </section>
      <hr>

      <section style="color: maroon">
        <header>診察状況</header>
        <div id="app">
          呼び出し中: {{state.calling === 0 ? "お待ち下さい" : state.calling}}<br>
          コメント:{{state.comment}}
        </div>
      </section>
      <hr>
      <a href="keitai.php">〔最新の状況に更新〕</a>
    </div>
    <hr>
    このWEBページは受付を行うものではありません。<br>
    受付は来院の上お願いします。
    <hr>
    <script>
    console.log(state)
    const vue = new Vue({el:"#app",data: {state}})
    setInterval( () =>  {
      const ts = Math.floor(new Date().getTime() / 1000);
      fetch(`./api/data.json?ts=${ts}`).then( res =>  res.json() ).then(json => vue.state = {...json})
    }, 5000);
    </script>
  </body>
</html>
