<template>
  <div class="add">
    <label for="file">Загрузить файл</label>
    <input type="file" id="file" multiple v-on:change="setFile($event.target.files)">
    <div><button @click.prevent="setFileCatalog" >Загрузить</button></div>
  </div>

</template>

<script>
export default {
  name: 'addFile',
  data () {
    return {
      file: []
    }
  },
  methods: {
    setFile ($event) {
      this.file = $event
    },
    async setFileCatalog () {
      let formData = new FormData()
      for (let i = 0; i < this.file.length; i++) {
        formData.append('img' + i, this.file[i], this.file[i].name)
      }
      await this.$store.originalDispatch('addCatalog', formData)
      this.file = []
    }
  }
}
</script>

<style>
.add{
  margin-top: 20px;
}
</style>
