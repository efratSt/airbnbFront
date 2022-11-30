<template>
    <section class="container main-container root-cmp">
        <user-msg />
        <stay-header />
        <router-view />
        <stay-footer />
    </section>
</template>

<script>
import { store } from './store/store';
import stayHeader from './cmps/stay-header.vue';
import userMsg from './cmps/user-msg.vue';
import { userService } from './services/user.service';
import stayFooter from './cmps/stay-footer.vue';

export default {
    created() {
        const user = userService.getLoggedinUser();
        if (user) store.commit({ type: 'setLoggedinUser', user });
    },
    components: {
        stayHeader,
        userMsg,
        stayFooter,
    },
};
</script>
