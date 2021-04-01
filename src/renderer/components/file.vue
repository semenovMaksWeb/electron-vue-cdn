<template>
  <div>
    <div class="element-catalog-wrapper" v-on="$listeners" @click="Modal(true)">
      <div class="element-catalog-img">
        <img :src="require('@/assets/file.png')" alt="file">
      </div>
      <div class="element-catalog-name">{{name}}</div>
    </div>
    <modal-img :url="url" v-if="getModal === true" @click.self="Modal(false)"/>
  </div>

</template>

<script>
import {apiUrl} from '../store/index'
import ModalImg from './modal-img'
export default {
  name: 'file',
  components: {ModalImg},
  props: {
    name: {
      type: String,
      require: true
    },
    element: {
      type: Object
    }
  },
  data () {
    return {
      url: '',
      getModal: false
    }
  },
  computed: {
    getPath () {
      return this.$store.getters['getPathString']
    }
  },
  created () {
    this.url = `${apiUrl}/cdn/${this.getPath}/${this.element.name}`
  },
  methods: {
    Modal (value) {
      console.log('1')
      this.getModal = value
    }
  }
}
</script>

<style>

</style>
