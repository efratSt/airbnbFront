<template>
    <section class="stay-list">
      <h1>stay-app</h1>
      <stay-list :stays="stays"/>
    </section>
    <!-- <pre>{{stays}}</pre> -->
</template>

<script>

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import {stayService} from '../services/stay.service.local'
import stayList  from '../cmps/stay-list.vue'

export default {
  data() {
    return {
      stayToAdd: stayService.getEmptyStay()
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    stays() {
      return this.$store.getters.stays
    }
  },
  created() {
    this.$store.dispatch({type: 'loadStays'})
  },
  methods: {
  },
  components: {
    stayList
    },
}
</script>
