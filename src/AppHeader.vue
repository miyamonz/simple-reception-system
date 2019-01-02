<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" >
        <h1 class="title has-text-white">管理者画面</h1>
      </a>
      <span class="button is-large has-text-white is-text" style="text-decoration: none"
        :class="$store.state.waitingDataSync && 'is-loading'">
        <b-icon icon="check"></b-icon>

      </span>

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
