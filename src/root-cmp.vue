<template>
    <section class="main-container root-cmp" :class="{ small: !notMain }">
        <user-msg />
        <stay-header />
        <stay-labels-filter v-if="notMain" />
        <router-view />
        <span> </span>
        <!-- <stay-footer /> -->
    </section>
</template>

<script>
import { store } from './store/store'
import stayHeader from './cmps/stay-header.vue'
import userMsg from './cmps/user-msg.vue'
import { userService } from './services/user.service'
import stayFooter from './cmps/stay-footer.vue'
import stayLabelsFilter from './cmps/stay-labels-filter.vue'

export default {
    created() {
        const user = userService.getLoggedinUser()
        if (user) store.commit({ type: 'setLoggedinUser', user })
    },
    computed: {
        notMain() {
            if (this.$route.path === '/' || this.$route.path === 'backoffice' ) {
          
                return true
            }else return false;
        },
    },
    components: {
        stayHeader,
        userMsg,
        stayFooter,
        stayLabelsFilter,
    },
}
</script>
