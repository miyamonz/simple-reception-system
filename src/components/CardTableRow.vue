<template>
  <div class="row">
    <div class="cell cell-handle">
      <div v-if="!isCalling" class="handle"> <b-icon icon="grip-vertical"></b-icon> </div>
    </div>
    <div class="cell cell-id"> <h3 class="title">{{ card.id }}</h3> </div>
    <div class="cell cell-slot"> <slot></slot> </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object
    }
  },
  computed: {
    isCalling() {
      return this.card.id === this.$store.state.calling;
    }
  }
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  height: $card-table-height;
  border-bottom: solid 1px $grey-lighter;

  &:not(.sortable-drag) {
    transition: background 0.5s, height 0.25s;
  }
  &.v-leave-to {
    height: 0;
  }
}
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  &.cell-slot {
    justify-content: flex-end;
    margin-right: 5vw;
  }
}
.cell-handle {
  flex-basis: 10vw;
}
.cell-id {
  flex-basis: 10vw;
  min-width: 70px;
}
.cell-slot {
  flex: 1;
}
</style>
