<template>
  <div class="container-about main-container">
    <p>{{ msg }}</p>

    <div class="loggedin-user" v-if="loggedinUser">
      <h3>Welcome {{ loggedinUser.fullname }}</h3>
      <button @click="doLogout">Logout</button>
    </div>
    <div v-else>
      <h2>Login</h2>
      <form @submit.prevent="doLogin">
        <input v-model="loginCred.username" type="text" />
        <input v-model="loginCred.password" type="password" />
        <button>Login</button>
      </form>
      <form class="signup-container" @submit.prevent="doSignup">
        <h2>Signup</h2>
        <input
          type="text"
          v-model="signupCred.fullname"
          placeholder="Your full name" />
        <input
          type="password"
          v-model="signupCred.password"
          placeholder="Password" />
        <input
          type="text"
          v-model="signupCred.username"
          placeholder="Username" />
        <button>Signup</button>
      </form>
    </div>
    <router-link to="/orderList">here</router-link>
  </div>
</template>

<script>
  export default {
    name: 'login-signup',
    data() {
      return {
        msg: '',
        loginCred: { username: '118676', password: 'Lizzy' },
        signupCred: {
          username: '',
          password: '',
          fullname: '',
          imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
        },
      }
    },
    computed: {
      users() {
        return this.$store.getters.users
      },
      loggedinUser() {
        // console.log(this.$store.getters.loggedinUser);
        return this.$store.getters.loggedinUser
      },
    },
    created() {
      this.loadUsers()
    },
    methods: {
      async doLogin() {
        if (!this.loginCred.username) {
          this.msg = 'Please enter username/password'
          return
        }
        try {
          await this.$store.dispatch({
            type: 'login',
            userCred: this.loginCred,
          })
          this.$router.push('/')
        } catch (err) {
          console.log(err)
          this.msg = 'Failed to login'
        }
      },
      doLogout() {
        this.$store.dispatch({ type: 'logout' })
      },
      async doSignup() {
        if (
          !this.signupCred.fullname ||
          !this.signupCred.password ||
          !this.signupCred.username
        ) {
          this.msg = 'Please fill up the form'
          return
        }
        await this.$store.dispatch({
          type: 'signup',
          userCred: this.signupCred,
        })
        this.$router.push('/')
      },
      loadUsers() {
        this.$store.dispatch({ type: 'loadUsers' })
      },
      async removeUser(userId) {
        try {
          await this.$store.dispatch({ type: 'removeUser', userId })
          this.msg = 'User removed'
        } catch (err) {
          this.msg = 'Failed to remove user'
        }
      },
      onUploaded(imgUrl) {
        this.signupCred.imgUrl = imgUrl
      },
    },
    components: {},
  }
</script>
