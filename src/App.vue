<template>
  <div id="app">
    <cartoon-viewer></cartoon-viewer>
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
