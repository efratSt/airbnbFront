<template>
  <header>
      <!-- <router-link to="/login">Login / Signup</router-link> -->
      <h1>AIRBNB</h1>
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