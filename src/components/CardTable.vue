<template>
  <div>
    <draggable v-if="list.length !== 0" 
      :options="{animation:80, handle:'.handle'}" 
      @start="$store.commit('setDrag', true)"
      @end="$store.commit('setDrag', false)"
      v-model="list" 
      >
      <transition-group tag="div">
        <CardTableRow 
          v-for="card in list"
          :key="card.id" 
          :card="card"
          :class="rowColor(card)">
          <slot :id="card.id"></slot>
        </CardTableRow>
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
import CardTableRow from "./CardTableRow.vue";
export default {
  components: { CardTableRow },
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
        this.$emit("update:cards", arr);
      }
    }
  },
  methods: {
    rowColor(card) {
      if (card.id === this.$store.state.calling) return "item-calling";
      if (card.huzai) return "item-huzai";
      if (card.willRemove && !card.huzai) return "has-background-grey-lighter";
      return "";
    }
  }
};
</script>
<style lang="scss" scoped>
.sortable-ghost {
  background: rgba($primary, 0.4);
}
.item-calling {
  background: rgba($danger, 0.2);
}
.item-huzai {
  background: rgba($warning, 0.4);
}
</style>
