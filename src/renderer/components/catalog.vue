<template>
  <div class="catalog-block">
    <template v-for="(element, index) in getCatalog">
      <component
          @contextmenu="getMenu"
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
    getMenu () {

    },
    setActive (index) {
      this.$store.originalDispatch('activeCatalog', {index, value: true})
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
