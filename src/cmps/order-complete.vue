<template>
  <div class="order-confirmation-modal flex">
    <div class="order flex">
      <div class="order-confirmation-details">
        <h1 class="order-confirmation header">One last step</h1>
        <h5>Dear {{ order.buyer.fullname }},</h5>
        <h5>
          In order to complete your reservation, please confirm the following
          details.
        </h5>
        <h2>Reservation details</h2>
        <h3>Trip dates:</h3>
        <span>{{ order.startDate }} - {{ order.endDate }}</span>
        <h3>Guests:</h3>
        <span class="order-guests">{{ order.guests }}</span>
        <h3 class="order-price">Price details:</h3>
        <div class="flex space-between">
          <div class="order-price">
            <span
              >{{ currencyCode }}{{ order.price.price }} x
              {{ order.duration }} nights</span
            >
          </div>
          <div>
            <span class="order-price-summary"
              >{{ currencyCode
              }}{{ order.price.totalPrice.toLocaleString() }}</span
            >
          </div>
        </div>
        <div class="flex space-between">
          <div class="order-price extra fees">
            <span>Other fees</span>
          </div>
          <div class="order-price-extra fees">
            <span>{{ currencyCode }}{{ order.price.fees }}</span>
          </div>
        </div>
        <div class="order-total flex space-between">
          <div class="order-price-total text">
            <span>Total</span>
          </div>
          <div>
            <span class="order-price-total sum"
              >{{ currencyCode
              }}{{
                (order.price.totalPrice + order.price.fees).toLocaleString()
              }}</span
            >
          </div>
        </div>
      </div>
      <div class="order-image-container flex">
        <img class="order-image-img" :src="order.stay.thumbnail" alt="" />
        <span class="order-image title">{{ order.stay.name }}</span>
      </div>
    </div>
    <div class="order-modal-buttons">
      <!-- <button @click="$emit('closeOrderModal')" class="order-modal-btn close">Back</button> -->
      <button @click="sendOrder" class="order-modal-btn confirm">
        Confirm
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      order: Object,
    },
    data() {
      return {}
    },
    created() {},
    computed: {
      currencyCode() {
        if (this.order.currencyCode === 'USD') return '$'
        if (this.order.currencyCode === 'EUR') return '€'
        if (this.order.currencyCode === 'ILS') return '₪'
      },
    },
    methods: {
      async sendOrder() {
        await this.$store.dispatch({ type: 'addOrder', order: this.order })
        this.$emit('closeOrderModal')
        this.$router.push('/')
      },
    },
  }
</script>
