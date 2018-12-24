<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" >
        <h1>管理者画面</h1>
      </a>

      <a role="button" class="navbar-burger" @click="click" >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    click() {
      const app = this.$root.$refs.app;
      app.sideMenuOpen = !app.sideMenuOpen;
    }
  }
};
</script>
