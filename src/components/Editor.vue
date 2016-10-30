<template>
  <div>
    <div>
      <input v-model='title'/>
    </div>
    <div>
      <textarea v-model='content'></textarea>
    </div>
    <button @click='save'>Save</button>
  </div>
</template>

<script>
export default {
  name: 'editor',
  props: ['stories'],
  data: () => ({
    title: '',
    content: ''
  }),
  methods: {
    save: function () {
      const newStory = {
        id: Date.now(),
        title: this.title,
        content: this.content
      }
      this.stories.push(newStory)
      this.$router.push('/')
    }
  }
}
</script>

<style lang='scss'>
</style>
