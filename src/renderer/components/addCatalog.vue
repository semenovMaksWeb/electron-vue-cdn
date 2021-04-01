<template>
  <div class="add-catalog">
    <input type="name" placeholder="названия папки" v-model=name>
    <button @click.prevent="addCatalog"> Создать папку</button>
  </div>

</template>

<script>
export default {
  name: 'addCatalog',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    async addCatalog () {
      console.log(this.name)
      await this.$store.originalDispatch('addDirective', this.name)
      this.name = ''
    }
  }
}
</script>

<style>
.add-catalog{
  margin-top: 20px;
}
</style>
