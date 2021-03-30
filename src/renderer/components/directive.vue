<template>
  <div class="element-catalog-wrapper" v-on="$listeners">
    <div class="element-catalog-img">
      <img :src="require('@/assets/directive.png')" alt="directive">
    </div>
    <div class="element-catalog-name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'directive',
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
