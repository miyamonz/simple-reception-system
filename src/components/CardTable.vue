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
  props: ["data"],
  methods: {
    type(t) {
      return t;
    }
  },
  data() {
    return {
      list: this.data
    };
  }
};
</script>
<style lang="scss" scoped>
.sortable-ghost {
  background: rgba($primary, 0.4);
}
.handle {
  width: 50px;
}
.cell-id {
  width: 50px;
}
.item {
  transition: all 0.5s;
}
.item-calling {
  background: rgba($warning, 0.4);
}
</style>
