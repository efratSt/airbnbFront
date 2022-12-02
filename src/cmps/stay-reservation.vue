<template>
    <div v-if="stay" class="order-container">
        <section class="order-form-header">
            <div class="order-form-header-secondary">
            <p><span class="cost">{{currencyCode}}</span></p>
            <p><span class="cost">{{stay.price}}</span> </p>
            <p class="reservation-price unit">&nbsp/ night</p>
            </div>
            <div class="order-form-header-secondary">
                <p><i class="fa-solid fa-star"></i>{{stayRate}}</p>
                <p> &nbsp&#183&nbsp </p>
                <p><span class="reviews"><a href="#">
                {{ stay.reviews.length }}
                 reviews</a> 
                </span></p>
            </div>
        </section>
        <section class="order-data">
            <div class="date-picker">
                <div class="date-input">
                    <label >CHECK-IN</label>
                    <input>{{ date(range.start) }} 
                </div>        
                <div class="date-input">
                    <label>CHECKOUT</label>
                    <input>{{ date(range.end) }}
                </div>
                </div>
                <div class="guest-input">
                    <label>GUESTS</label>
                    <input value="2">
                    <svg viewBox="0 0 320 512" width="100" title="angle-down">
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                    </svg>
                </div>
            
        </section>
        <div class="btn-container">
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="btn-cell1"></div>
            <div class="content">
            <button class="action-btn">
            <span>Check availability</span>
            </button>
        </div>
        </div>
        <span>You won't be charged yet</span>
        <span class="reservation-price summary">{{stay.price}} x {{stayDuration}}</span>
        <span class="reservation-price summary">{{totalStayPrice}}</span>
        <span v-if="extras" class="reservation-price extras">Service fee{{extra.fee}}</span>
        <span class="reservation-price total">{{totalPrice}}</span>
    </div>
</template>
<script>
  export default {
    props:{
        stay : Object,
        range: Object
    },
    data() {
        return{
            numberOfGuest: null
        }
    },
    methods :{
        stayDuration(){
            console.log(range.start,range.end)
        },
        date(date) {
        return new Date(date).toLocaleDateString()
      },
        
    },
        
    
    computed: {
        currencyCode(){
            if(this.stay.currencyCode === 'USD') return '$'
            if(this.stay.currencyCode === 'EUR') return '€'
            if(this.stay.currencyCode === 'ILS') return '₪'
        },
        totalStayPrice(){
            console.log('total price to calculate')
        },
        totalPrice(){
            console.log('total price without fees')
        },
        stayRate(){
          console.log(this.stay.reviews)
         let rateSum = 0
         this.stay.reviews.forEach(review => {
            rateSum += review.rate})
            return (rateSum / this.stay.reviews.length).toFixed(2)
        },
    },
    
}
</script>