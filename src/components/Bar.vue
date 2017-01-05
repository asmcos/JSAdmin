<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Links</h2>
    <ul>
      <router-link tag="li" to="/">
  	<a>Home</a>
      </router-link>
      <router-link tag="li" to="/Simple">
  	<a>Simple</a>
      </router-link>
      <router-link tag="li" to="/TestAudio">
  	<a>Audio</a>
      </router-link>
      <br>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data () {
    return {
      msg: 'Welcome to Jvtalking 2.0 App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
