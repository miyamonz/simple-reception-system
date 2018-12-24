<template>
  <div class="home container">
    <b-table :data="arr" :columns="columns" :mobile-cards="false"></b-table>
  </div>
</template>

<script>
//prettier-ignore
const arr = [
  { 'id': 1, 'first_name': 'Jesse',    },
  { 'id': 2, 'first_name': 'John',    },
  { 'id': 3, 'first_name': 'Tina',    },
  { 'id': 4, 'first_name': 'Clarence',    },
  { 'id': 5, 'first_name': 'Anne',    }
]
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
  data() {
    return {
      arr,
      columns
    };
  }
};
</script>
