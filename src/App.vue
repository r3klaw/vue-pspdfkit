<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <pspdf/>
    <!-- <test/> -->
    <div id="components-demo">
  <button-counter></button-counter>
</div>
  </div>
</template>

<script>
import pspdf from './components/pspdf.vue'
// import test from './components/test.vue'

export default {
//   Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// }),
// new :Vue({ el: '#components-demo' }),
  name: 'app',
  components: {
    pspdf,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
