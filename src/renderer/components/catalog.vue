<template>
  <div class="catalog-block">
    <template v-for="(element, index) in getCatalog">
      <template v-if="getCatalog !== null">
        <component
            :element="element"
            @contextmenu="getMenu($event, index)"
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
    getMenu ($event, index) {
      console.log($event.target.className)
      this.$store.originalCommit('setCheck', true)
      this.$store.originalCommit('setMenu',
        {
          index,
          active: true,
          top: $event.clientY,
          left: $event.clientX
        }
      )
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
