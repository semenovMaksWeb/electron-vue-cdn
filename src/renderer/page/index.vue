<template>
  <div class="wrapper">
    <div class="container">
      <header>
        <pathCatalog/>
      </header>
      <main>
        <Menu />
        <Catalog :getCatalog="getCatalog" class="catalog-wrapper" />
        <add-catalog/>
        <add-file/>
      </main>
    </div>
  </div>
</template>

<script>
import pathCatalog from '@/components/path.vue'
import Catalog from '@/components/catalog'
import Menu from '@/components/menu'
import AddFile from '@/components/addFile'
import AddCatalog from '@/components/addCatalog'
export default {
  name: 'PageIndex',
  components: {
    AddCatalog,
    AddFile,
    Menu,
    Catalog,
    pathCatalog
  },
  async created () {
    this.$store.originalCommit('setPath', ['public'])
    await this.$store.originalDispatch('setCatalog')
  },
  computed: {
    getCatalog () {
      return this.$store.getters['getCatalog']
    }
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
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
img{
  width: 100%;
  height: auto;
}
.element-catalog-img{
  width: 15px;
}
.catalog-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 20px;
}
.element-catalog-wrapper{
  cursor: pointer;

  display: flex;
  align-items: center;

  margin-bottom: 10px;
  //&:before{
  //  content: "";
  //
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //
  //  margin-right: 10px;
  //
  //  height: 10px;
  //  width: 10px;
  //
  //  border: 1px solid #a9a9a9;
  //  font-size: 12px;
  //}
  //&.active:before{
  //  content: "\2714"
  //}
}
.element-catalog-name{
  margin-left: 5px;
}
</style>
