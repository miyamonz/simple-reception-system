<template>
  <div class="modal-card">
    <div class="modal-card-head">
      カードの消去
    </div>
    <div class="modal-card-body">
      本当に消去しますか？
    </div>
    <footer class="modal-card-foot">
      <button class="button" 
         @click="$parent.close()">キャンセル</button>
      <button class="button is-danger"
          @click="$emit('run')"
        >消去の実行</button>
    </footer>
  </div>
</template>
