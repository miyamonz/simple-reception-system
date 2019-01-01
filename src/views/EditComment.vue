<template>
  <div id="edit-comment" >
    <div class="column">
      <h2 class="title">コメントの編集</h2>
      <b-collapse class="panel" :open="openIndex === 1" @update:open="click(1)">
        <div slot="trigger" class="panel-heading">
          <strong>今日のコメント</strong>
          <b-icon :icon="openIndex === 1 ? 'caret-down' : 'caret-up'" style="float:right" ></b-icon>
        </div>
        <div class="panel-block" style="display: block;">
          <FormText/>
        </div>
      </b-collapse>
      <b-collapse class="panel" :open="openIndex === 2" @update:open="click(2)">
        <div slot="trigger" class="panel-heading">
          <strong>常時表示</strong>
          <b-icon :icon="openIndex === 2 ? 'caret-down' : 'caret-up'" style="float:right" ></b-icon>
        </div>
        <div class="panel-block" style="display: block;">
          <FormText/>
        </div>
      </b-collapse>
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
