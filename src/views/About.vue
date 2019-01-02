<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{msg}}</p>
    <b-button @click="onClick">Click</b-button>

  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.msg
    }
  },
  methods: {
    onClick () {
      this.$store.commit('changeMsg', 'click')
    }
  }
}
</script>

