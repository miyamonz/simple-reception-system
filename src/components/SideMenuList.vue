
<template>
  <div>
    <div class="menu" v-for="[name, func] in menus"
      :key="name"
      @click="func">
      {{name}}
    </div>
  </div>
</template>
<script>
export default {
  props: ["menus"]
};
</script>
<style>
.menu {
  position: relative;
  height: 80px;
  border: solid;
  border-width: 1px 0 0;
  overflow: hidden;

  transition: all 0.5s;
  font-size: 50px;
  font-weight: bold;
}
.menu:nth-child(even) {
  background: #eee;
}
.menu:last-child {
  border-width: 1px 0 1px;
}
</style>
