<template>
  <div id="edit-comment" >
    <div class="column">
      <b-field label="コメントの編集">
        <b-input type="textarea"></b-input>
      </b-field>
      <div class="buttons is-right">
        <button class="button is-primary"
          :class=" sending && 'is-loading'"
          >送信</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { sending: false };
  }
};
</script>
