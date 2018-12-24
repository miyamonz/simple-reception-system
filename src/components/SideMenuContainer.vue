<template>
  <div>
    <transition name="back">
      <div class="back" @click="$emit('close')" v-if="open"></div>
    </transition>
    <div class="sidemenu" ref="sidemenu" :class="{open}" >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["open"],
  methods: {}
};
</script>
<style>
.sidemenu {
  position: fixed;
  transition: transform 0.5s;
  z-index: 100;
  background: white;
  height: 100vh;
}

.sidemenu:not(.open) {
  transform: translateX(-100%);
}
.back {
  background: #000;
  opacity: 0.4;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
  transition: all 0.5s;
}
.back-enter,
.back-leave-active {
  opacity: 0;
}
</style>
