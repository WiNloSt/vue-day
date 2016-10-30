<template>
  <div>
    <div v-for='story in stories'>
      <router-link :to='`/story/${story.id}`'>
        <h1>{{ story.title }}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['stories']
}
</script>

<style lang='scss'>
</style>
