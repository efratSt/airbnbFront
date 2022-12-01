<template>
    <section class="main-container root-cmp">
        <user-msg />
        <stay-header class="main-container full" />
        <stay-labels-filter />
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
import stayLabelsFilter from './cmps/stay-labels-filter.vue';

export default {
    created() {
        const user = userService.getLoggedinUser();
        if (user) store.commit({ type: 'setLoggedinUser', user });
    },
    components: {
        stayHeader,
        userMsg,
        stayFooter,
        stayLabelsFilter,
    },
};
</script>
