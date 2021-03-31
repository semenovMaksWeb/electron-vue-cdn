<template>
  <div
      class="menu"
      v-if="getMenu.active"
      :style="{top: `${getMenu.top}px`, left: `${getMenu.left}px`}"
  >
    <div class="menu-link" @click="getElement">Открыть</div>
    <div class="menu-link" @click="updateElement">Изменить</div>
    <div class="menu-link" @click="deleteElement">Удалить</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    getMenu () {
      return this.$store.getters['getMenu']
    }
  },
  methods: {
    getElement () {
      console.log('getElement')
    },
    updateElement () {
      console.log('updateElement')
    },
    deleteElement () {
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
