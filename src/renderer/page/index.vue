<template>
  <div class="wrapper">
    <div class="container">
      <header>
        <pathCatalog/>
      </header>
    </div>
  </div>
</template>

<script>
import pathCatalog from '@/components/path.vue'
export default {
  name: 'PageIndex',
  components: {
    pathCatalog
  }
}
</script>

<style lang="scss">
.wrapper{
  padding: 20px 0;
}
.container{
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
