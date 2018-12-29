<template>
  <div class="about">
    <h1>設定</h1>
    <button class="button is-primary" @click="isModalActive = true">
      カードの消去
    </button>
    <b-modal :active.sync="isModalActive" has-modal-card>
      <ModalDeleteCards @run="run"/>
    </b-modal>
  </div>
</template>
<script>
import ModalDeleteCards from "@/components/ModalDeleteCards.vue";
export default {
  components: { ModalDeleteCards },
  methods: {
    run() {
      this.isModalActive = false;
      console.log("run");
    }
  },
  data() {
    return { isModalActive: false };
  }
};
</script>
