<template>
  <div>
    <draggable v-if="list.length !== 0" :options="{animation:80, handle:'.handle'}" 
      v-model="list" 
      element="table" 
      class=" container table is-fullwidth">
      <transition-group tag="tbody">
        <tr v-for="e in list" :key="e.id" 
          class="item"
          :class="e.id === $store.state.calling && 'item-calling'">
          <td class="handle">
            <b-icon icon="grip-vertical"></b-icon>
          </td>
          <td class="cell-id">
            <h3 class="title">{{ e.id }}</h3>
          </td>
          <td style="text-align:right">
            <slot :id="e.id"></slot>
          </td>
        </tr>
      </transition-group>
    </draggable>

    <div v-else>
      <section class="section">
        <div v-if="!$store.state.waitingDataSync" class="content has-text-grey has-text-centered">
          <b-icon icon="surprise" size="is-large"></b-icon>
          <p>なし</p>
        </div>
      </section>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    cards: {
      type: Array
    }
  },
  computed: {
    list: {
      get() {
        return this.cards;
      },
      set(arr) {
        this.$store.commit("setCardsToMain", arr);
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.table {
  margin-left: auto;
  margin-right: auto;
}
.sortable-ghost {
  background: rgba($primary, 0.4);
}
.handle {
  width: 10vw;
}
.cell-id {
  width: 10vw;
  min-width: 80px;
}
.item:not(.sortable-drag) {
  transition: background 0.5s;
}
.item-calling {
  background: rgba($warning, 0.4);
}
</style>
