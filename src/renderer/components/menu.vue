<template>
  <div
      class="menu"
      v-if="getMenu.active"
      :style="{top: `${getMenu.top}px`, left: `${getMenu.left}px`}"
  >
    <div v-if="this.getCatalog[this.getMenu.index].type !== 'File'" class="menu-link" @click="getElement">Открыть</div>
<!--    <div class="menu-link" @click="updateElement">Изменить</div>-->
    <div class="menu-link" @click="deleteElement">Удалить</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    getMenu () {
      return this.$store.getters['getMenu']
    },
    getCatalog () {
      return this.$store.getters['getCatalog']
    }
  },
  methods: {
    async getElement () {
      const data = this.getCatalog[this.getMenu.index].name
      console.log(this.getCatalog[this.getMenu.index])
      this.$store.originalCommit('pushPath', data)
      await this.$store.originalDispatch('setCatalog')
    },
    updateElement () {
      console.log('updateElement')
    },
    async deleteElement () {
      await this.$store.originalDispatch('deleteCatalog', this.getMenu.index)
      // const data = this.getCatalog[this.getMenu.index]deleteCatalog
      console.log('deleteElement')
    }
  }
}
</script>

<style lang="scss">
.menu{
  padding: 5px;
  z-index: 2;
  position: absolute;
  background-color: #fff;
  border: 1px solid #a9a9a9;
}
.menu-link{
  cursor: pointer;
  margin-bottom: 2px;
  &:hover{
    color: red;
  }
}
</style>
