<template>
  <div id="app" @click="resetMenu" @contextmenu="resetMenu">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue-cdn',
    computed: {
      getCheck () {
        return this.$store.getters['getCheck']
      }
    },
    methods: {
      resetMenu () {
        console.log(this.getCheck)
        if (!this.getCheck) {
          this.$store.originalCommit('setMenu',
            {
              active: false
            }
          )
        }
        this.$store.originalCommit('setCheck', false)
      }
    }
  }
</script>

<style>
#app{
  height: 100vh;
}
  /* CSS */
</style>
