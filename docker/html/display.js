const load = () => {
  return fetch(url).then(res => res.json());
};
(async () => {
  const state = await load();

  const vue = new Vue({
    el: "#app",
    computed: {
      callingIndex() {
        return this.state.cards.main.findIndex(
          c => c.id === this.state.calling
        );
      },
      huzai() {
        return this.state.cards.main.filter(c => c.huzai);
      },
      today() {
        return this.state.comments.today.replace(/\r|\n|\r\n/g, "<br>");
      },
      always() {
        return this.state.comments.always.replace(/\r|\n|\r\n/g, "<br>");
      }
    },
    data: { state }
  });

  setInterval(async () => {
    try {
      const state = await load();
      vue.state = state;
    } catch (e) {
      console.error(e);
      console.log("reload after 5sec");
      setTimeout(() => location.reload(), 5000);
    }
    console.log("updated");
  }, 1000);
})();
