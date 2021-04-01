<template>
  <div class="modal-img">
    <img :src="url">
    <div v-on="$listeners" class="text-close">x</div>
  </div>
</template>

<script>
export default {
  name: 'modal-img',
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style>
.text-close{
  color: red;
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.modal-img{
  position: absolute;
  z-index: 20;
  /*height: 50vh;*/
  /*width: 50vw;*/
}
</style>
