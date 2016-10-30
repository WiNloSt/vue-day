<template>
<div class='cartoon-viewer'>
  <div class='cartoon-page'>
    <img class='cartoon-img' :src='cartoonUrl' />
  </div>
  <div class='cartoon-control'>
    <button :disabled='page<=1' class='control-button' @click='addPage(-1)'>&lt;</button>
    <span class='control-page'>{{page}}</span>
    <button :disabled='page>=26' class='control-button' @click='addPage(1)'>&gt;</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'cartoon-viewer',
  data: () => ({
    page: 1
  }),
  methods: {
    addPage: function (pageDiff) {
      this.page += pageDiff
    }
  },
  computed: {
    cartoonUrl: function () {
      return `http://bill.sellsuki.com/cartoon/${this.page}.jpg`
    }
  }
}
</script>

<style>
.cartoon-viewer {
  width: 150px;
  margin: 0 auto;
}

.cartoon-page {
  width: 100%;
  height: 150px;
  background: aqua;
}

.cartoon-img {
  width: 100%;
}
.cartoon-control {
  display: flex;
}

.control-button {
  flex: 1;
}

.control-page {
  padding: 0 0.5em;
}
</style>
