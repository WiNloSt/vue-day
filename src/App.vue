<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/editor">New Story</router-link>
      <router-link to='/story/1'>Go to first story</router-link>
    </p>
  <router-view :stories='stories'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    stories: [
      {
        id: 1,
        title: 'title A',
        content: 'content A'
      },
      {
        id: 2,
        title: 'title B',
        content: 'content B'
      }
    ]
  })
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
