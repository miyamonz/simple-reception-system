<template>
  <div class="home">
    <NavTables v-if="$store.state.accepting"/>
    <div v-else>
      受付を停止しています
    </div>
  </div>
</template>

<script>
import NavTables from "@/components/NavTables.vue";
export default {
  name: "home",
  components: { NavTables }
};
</script>
