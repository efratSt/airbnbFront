<template>
    <div class=" order-confirmation-container">
        <h2 class="order-confirmation header">
        Your order have been completed</h2>
        <h4>Dear Guest,</h4>
        <h4>In order </h4> 
        
    </div>
</template>
<script>
export default {
  
  data() {
   return{
         }
 },

 methods:{
    async getOrder() {
        this.order = await this.$store.dispatch({
            type: 'loadOrders',
            orderId,
        })
        }
 }
}
</script>