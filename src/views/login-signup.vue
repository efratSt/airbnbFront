<template>
    <div class="container about">
        <p>{{ msg }}</p>

        <div class="loggedin-user" v-if="loggedinUser">
            <h3>
                <!-- Loggedin User:
                {{ loggedinUser.fullname }}
                <pre>{{loggedinUser}}</pre> -->
                Welcome {{ loggedinUser.fullname }}
            </h3>
            <button @click="doLogout">Logout</button>
        </div>
        <div v-else>
            <h2>Login</h2>
            <form @submit.prevent="doLogin">
                <input v-model="loginCred.username" type="text" />
                <input v-model="loginCred.password" type="password" />
                    <!-- <option value="">Select User</option>
                    <option v-for="user in users" :key="user._id" :value="user.username">
                        {{ user.fullname }}
                    </option> -->
                <!-- <input type="text" v-model="loginCred.username" placeholder="User name" />
        <input
          type="text"
          v-model="loginCred.password"
          placeholder="Password"
        /> -->
                <button>Login</button>
            </form>
            <p class="mute">user1 or admin, pass:123</p>
            <form @submit.prevent="doSignup">
                <h2>Signup</h2>
                <input type="text" v-model="signupCred.fullname" placeholder="Your full name" />
                <input type="text" v-model="signupCred.password" placeholder="Password" />
                <input type="text" v-model="signupCred.username" placeholder="Username" />
                <button>Signup</button>
            </form>
        </div>
        <hr />
        <!-- <details>
            <summary>Admin Section</summary>
            <ul>
                <li v-for="user in users" :key="user._id">
                    <pre>{{ user }}</pre>
                    <button @click="removeUser(user._id)">x</button>
                </li>
            </ul>
        </details> -->
    </div>
</template>

<script>
export default {
    name: 'login-signup',
    data() {
        return {
            msg: '',
            loginCred: { username: '75091963', password: 'Edgar' },
            signupCred: {
                username: '75091963',
                password: 'Edgar',
                fullname: 'Edgar',
                imgUrl: 'https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTU3OTIzNTc4NTMxNDg5NDI2/how-did-edgar-allan-poe-dies-featured-photo.jpg',
            },
        };
    },
    computed: {
        users() {
            return this.$store.getters.users;
        },
        loggedinUser() {
            console.log(this.$store.getters.loggedinUser);
            return this.$store.getters.loggedinUser;
        },
    },
    created() {
        this.loadUsers();
    },
    methods: {
        async doLogin() {
            if (!this.loginCred.username) {
                this.msg = 'Please enter username/password';
                return;
            }
            try {
                await this.$store.dispatch({
                    type: 'login',
                    userCred: this.loginCred,
                });
                this.$router.push('/');
            } catch (err) {
                console.log(err);
                this.msg = 'Failed to login';
            }
        },
        doLogout() {
            this.$store.dispatch({ type: 'logout' });
        },
        async doSignup() {
            if (
                !this.signupCred.fullname ||
                !this.signupCred.password ||
                !this.signupCred.username
            ) {
                this.msg = 'Please fill up the form';
                return;
            }
            await this.$store.dispatch({
                type: 'signup',
                userCred: this.signupCred,
            });
            this.$router.push('/');
        },
        loadUsers() {
            this.$store.dispatch({ type: 'loadUsers' });
        },
        async removeUser(userId) {
            try {
                await this.$store.dispatch({ type: 'removeUser', userId });
                this.msg = 'User removed';
            } catch (err) {
                this.msg = 'Failed to remove user';
            }
        },
        onUploaded(imgUrl) {
            this.signupCred.imgUrl = imgUrl;
        },
    },
    components: {},
};
</script>
