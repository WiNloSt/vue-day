<template>
  <div>
    <h1>{{ story.title }}</h1>
    <h2>{{ story.content }}</h2>
  </div>
</template>

<script>
export default {
  name: 'story',
  props: ['stories'],
  computed: {
    story () {
      return this.stories.find(story => story.id.toString() === this.$route.params.id)
    }
  }
}
</script>

<style lang='scss'>
</style>
