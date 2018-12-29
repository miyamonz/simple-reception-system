<template>
  <CardTable :data="$store.getters.removed">
    <button slot-scope="{id}"
      class="button is-primary"
      @click="$store.dispatch('toRemoved', id)">
    戻す
    </button>
  </CardTable>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
export default {
  components: { CardTable }
};
</script>
