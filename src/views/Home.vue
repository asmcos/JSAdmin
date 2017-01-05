<template>
   <div>
    <bar> </bar>
    <bar> </bar>
    <bar> </bar>
    <bar> </bar>
    <bar> </bar>
    <router-link to="/Simple">
         <a> simple </a>
    </router-link>
   <div id="1" style="height:800px"> 1</div>
   <div id="2" style="height:800px"> 2
    <router-link to="/Simple">
         <a> 2link </a>
    </router-link>
   </div>
   <div id="3" style="height:800px"> 3</div>
   </div>
</template>

<script>
import Bar from '../components/Bar.vue'

export default {
  name: 'Home',
  components: {
    Bar
  }
}
</script>

