<template>
  <div class="catalog-block">
    <template v-for="(element, index) in getCatalog">
      <component

          @contextmenu="getMenu"
          @dblclick="newsCatalog(index)"
          @click="setActive(index)"
          :key="element.id"
          :name="element.name"
          :is="element.type"
          :class="{active: element.active}"
      />
    </template>
  </div>
</template>

<script>
import File from '@/components/file'
import Directive from '@/components/directive'
export default {
  name: 'catalog',
  methods: {
    newsCatalog (index) {
      console.log('newsCatalog')
      this.$store.originalCommit('activeFalseCatalog', {index})
    },
    getMenu () {
      console.log('getMenu')
    },
    setActive (index) {
      this.$store.originalCommit('activeCatalog', {index})
    }
  },
  components: {
    File,
    Directive
  },
  props: {
    getCatalog: {
      type: Array
    }
  }
}
</script>

<style>
.catalog-block{
  margin-left: 15px;
}
</style>
