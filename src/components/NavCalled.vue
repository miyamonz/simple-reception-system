<template>
  <section>
    <CardTable :data="$store.getters.called" style="margin-bottom: 80px">
      <div slot-scope="{id}" >
        <span class="tag is-warning is-rounded is-large" v-if="id === $store.state.calling">呼出中</span>
        <button
          class="button is-primary"
          @click="toAbsence(id)">
          不在に移動
        </button>
      </div>
    </CardTable>
    <OperationView class="_fix-bottom" />
  </section>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
import OperationView from "@/components/OperationView.vue";

export default {
  components: { CardTable, OperationView },
  methods: {
    toAbsence(id) {
      this.$store.dispatch("toAbsence", id);
      this.$toast.open({
        message: `${id}を不在にしました`,
        queue: false
      });
    }
  }
};
</script>

<style>
.fix-bottom {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 40vw;
}
</style>
