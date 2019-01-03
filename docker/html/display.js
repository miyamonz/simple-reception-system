const load = () => {
  return fetch(url).then(res => res.json());
};
const commentSplit = text => {
  let arr = text.split(/\r|\n|\r\n/);
  const head = arr.shift();
  return {
    head,
    body: arr.join("\n")
  };
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
        return commentSplit(this.state.comments.today);
      },
      always() {
        return commentSplit(this.state.comments.always);
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
