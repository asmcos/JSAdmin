<template>
  <div>
    <h1> Simple</h1>
    <bar> </bar>
   <div id="1" style="height:800px"> a</div>
   <div id="2" style="height:800px"> b</div>
   <div id="3" style="height:800px"> c</div>

  </div>
</template>

<script>
import Bar from '../components/Bar.vue'

export default {
  name: 'Simple',
  components: {
    Bar
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
