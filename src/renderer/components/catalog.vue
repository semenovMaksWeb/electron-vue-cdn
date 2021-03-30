<template>
  <div class="catalog-wrapper">
    <component name="1.png" is="file" :class="{active: true}"/>
  </div>
</template>

<script>
import File from '@/components/file'
import Directive from '@/components/directive'
export default {
  name: 'catalog',
  components: {
    File,
    Directive
  }
}
</script>

<style>
.catalog-wrapper{
  margin-top: 20px;
}
</style>
