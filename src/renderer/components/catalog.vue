<template>
  <div class="catalog-block">
    <template v-for="(element, index) in getCatalog">
      <template v-if="getCatalog !== null">
        <component
            @contextmenu="getMenu"
            @dblclick="newsCatalog(index)"
            @click="setActive(index)"
            :key="element.id"
            :name="element.name"
            :is="element.type"
        />
      </template>
    </template>
    <div v-if="getCatalog === null || getCatalog.length === 0 ">
      Каталог пустой
    </div>
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
