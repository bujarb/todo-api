<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    Nav
  }
}
</script>


<style media="screen">

</style>
