<template>
  <div class="home container">
    <b-table 
      :data="arr" 
      :columns="columns" 
      :mobile-cards="false"
      :loading="$store.state.waitingDataSync"
      ></b-table>
  </div>
</template>

<script>
const columns = [
  {
    field: "id",
    label: "ID",
    width: "40",
    numeric: true
  },
  {
    field: "first_name",
    label: "First Name"
  }
];
export default {
  name: "home",
  components: {},
  computed: {
    arr() {
      const { cards } = this.$store.state;
      return [...cards].map(([key, val]) => ({
        id: key,
        first_name: val
      }));
    }
  },
  data() {
    return {
      columns
    };
  }
};
</script>
