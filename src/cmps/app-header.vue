<template>
  <header>
      <router-link to="/login">Login / Signup</router-link>
  </header>
</template>
<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  }
}
</script>