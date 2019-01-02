<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" >
        <h1 class="title" style="color:white;">管理者画面</h1>
      </a>
      <span class="button is-large is-text"
            :class="$store.state.waitingDataSync && 'is-loading'"></span>

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
