<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/foo/bar">Go to Bar</router-link>
      <router-link to='/cartoon'>Go to Cartoon Viewer</router-link>
    </p>
  <router-view></router-view>
  </div>
</template>

<script>
import CartoonViewer from './components/CartoonViewer'

export default {
  name: 'app',
  components: {
    CartoonViewer
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
