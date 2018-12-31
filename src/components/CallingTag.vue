<template>
  <div 
    class="calling-tag"
    style="position: absolute;"
    :style="{top, left}">
  <span class="tag is-danger is-large" >
    呼出中</span>
  </div>
</template>
<script>
export default {
  computed: {
    left() {
      return 100 + "px";
    },
    top() {
      const i = this.$store.getters.callingIndex;
      //高さ .rowに指定したheight
      //3rem 本来はcss variableにしてjsで動的に読むとか
      return i * 3 + "rem";
    }
  }
};
</script>
<style lang="scss" scoped>
.calling-tag {
  display: flex;
  align-items: center;
  height: $card-table-height;
  transition: all 300ms;
}
</style>
