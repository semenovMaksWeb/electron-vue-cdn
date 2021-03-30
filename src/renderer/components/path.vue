<template>
  <div class="path-wrapper">
    <div>Выбранный каталог:</div>
    <div class="path-row">
      <div @click="clickPath(index)" class="path-elem" v-for="(data, index) in getPath">{{data}}/</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pathCatalog',
  methods: {
    // Изменить путь каталога
    clickPath (index) {

    }
  },
  computed: {
    getPath () {
      return this.$store.getters['getPath']
    }
  }
}
</script>

<style lang="scss">
.path-elem{
  cursor: pointer;

  &:hover ~ .path-elem{
    color: blue;
  }
}
.path-row{
  display: flex;
  flex-wrap: wrap;

  color: blue;

  &:hover{
    color: red;
  }
}
</style>
