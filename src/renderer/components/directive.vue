<template>
  <div class="element-catalog-wrapper" v-on="$listeners" @click="clickDirective">
    <div class="element-catalog-img">
      <img :src="require('@/assets/directive.png')" alt="directive">
    </div>
    <div class="element-catalog-name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'directive',
  methods: {
    async clickDirective () {
      this.$store.originalCommit('pushPath', this.name)
      await this.$store.originalDispatch('setCatalog')
    }
  },
  props: {
    name: {
      type: String,
      require: true
    }
  }
}
</script>

<style>

</style>
