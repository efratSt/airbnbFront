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
            <div>
                <div @click="toggleModal" class="guest-input">
                    <label>GUESTS</label>
                    <input  :value="totalGuests + ' guest'">
                    <svg viewBox="0 0 320 512" width="100" title="angle-down">
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                    </svg>
                    <guestsModal @click.stop="" v-if="guestsModalOpen" @counterChanged="counterChanged" :class="[{'details-page':guestsModalOpen }]"/>
                </div>
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
        <p><span>You won't be charged yet</span></p>
        <div v-if="this.range.start && this.range.end" class="reservation-price-container flex space-between">
            <div class="reservation-price">
                <span>{{currencyCode}} {{stay.price}} x {{stayDuration}} nights</span>
            </div> 
            <div>
                <span class="reservation-price-summary">{{currencyCode}}{{totalStayPrice}}</span>
            </div>
        </div>
        <span v-if="stay.extras" class="reservation-price extras">Service fee{{extra.fee}}</span>
        <span class="reservation-price total">{{totalPrice}}</span>
    </div>
</template>
<script>
import guestsModal from '../cmps/stay-guests-modal.vue'

  export default {
    props:{
        stay : Object,
        range: Object
    },
    data() {
        return{
            numberOfGuest: null,
            duration: null,
            guestsModalOpen: false,
            totalGuests: 1
        }
    },
    methods :{
        toggleModal(){
            this.guestsModalOpen = !this.guestsModalOpen
            
        },
        date(date) {
        return (date) ? new Date(date).toLocaleDateString() : 'Add dates'
      },
      counterChanged(totalGuests) {
            this.totalGuests = totalGuests;
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
            return (this.duration) * (this.stay.price)
        },
       
        stayRate(){
         let rateSum = 0
         this.stay.reviews.forEach(review => {
            rateSum += review.rate})
            return (rateSum / this.stay.reviews.length).toFixed(2)
        },
        stayDuration(){
            if(this.range.start && this.range.end)
            this.duration = ((this.range.end-this.range.start) / (1000 * 3600 * 24))
            return this.duration
        },
        totalPrice(){
            console.log('total price to calculate')
                    },
        
    },   
    components:{
        guestsModal
    }
}
</script>