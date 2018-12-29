<template>
  <div class="about">
    <h1>設定</h1>
    <button class="button is-primary" @click="isModalActive = true">
      カードの消去
    </button>
    <b-modal :active.sync="isModalActive" has-modal-card>
      <ModalDeleteCards />
    </b-modal>
  </div>
</template>
<script>
import ModalDeleteCards from "@/components/ModalDeleteCards.vue";
export default {
  components: { ModalDeleteCards },
  data() {
    return { isModalActive: false };
  }
};
</script>
