<template>
  <div id="edit-comment" >
    <div class="column">
      <h2 class="title">コメントの編集</h2>
      <nav class="panel">
        <p class="panel-heading">今日のコメント</p>
        <p class="panel-block" style="display: block"> <FormText/> </p>
      </nav>
      <br>

      <nav class="panel">
        <p class="panel-heading">常時表示</p>
        <p class="panel-block" style="display: block"> <FormText/> </p>
      </nav>
    </div>
  </div>
</template>
<script>
import FormText from "@/components/FormText.vue";
export default {
  components: { FormText },
  methods: {
    click(i) {
      const isClose = this.openIndex === 0;
      const another = this.openIndex !== i;
      this.openIndex = isClose || another ? i : 0;
    }
  },
  data() {
    return {
      openIndex: 0
    };
  }
};
</script>
<style>
#edit-comment .textarea {
  user-select: auto;
}
</style>
