<template>
  <div>
    <h1> Test HTML5 audio by wechat...</h1>
    <!--audio id='music'>
	<source src="./static/ten_years.mp3" type="audio/mpeg">
    </audio-->

    <audio id='music' style="height:0;width:0;display:none"src="">
   </audio>
   <p v-on:click="play"> Play </p>
  </div>
</template>

<script>
import Bar from '../components/Bar.vue'

export default {
  name: 'TestAudio',
  components: {
    Bar
  },
  methods: {
    play: function () {
      // var audio = document.getElementById('music')
      var url = './static/ten_years.mp3'
      var na = new window.Audio(url)
      na.play()
      na.stop()
      na.play()
    }
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
