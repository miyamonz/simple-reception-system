<template>
  <div 
    class="calling-tag"
    style="position: absolute;"
    :style="{top, left}">
    <span class="triangle"></span>
    <span class="arrow-body tag is-danger is-large">
      呼出中</span>
  </div>
</template>
<script>
import onresize from "@/debounceResize.js";
export default {
  mounted() {
    onresize(this.setLeft);
    setTimeout(this.setLeft, 10);
  },
  computed: {
    top() {
      this.setLeft();
      const i = this.$store.getters.callingIndex;
      //高さ .rowに指定したheight
      //3rem 本来はcss variableにしてjsで動的に読むとか
      return i * 3 + "rem";
    }
  },
  methods: {
    setLeft() {
      this.left = this.getLeft();
    },
    getLeft() {
      const element = document.querySelector(".cell-slot");
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (!rect) return;
      return rect.left - 10 + "px";
    }
  },
  data() {
    return {
      left: 0
    };
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
$arrow-color: $danger;
.arrow-body {
  height: $card-table-height * 0.8;
  border-radius: 0;
}
.triangle {
  border-top: $card-table-height * 0.6 solid transparent;
  border-right: $card-table-height * 0.6 solid $arrow-color;
  border-bottom: $card-table-height * 0.6 solid transparent;
}
</style>
