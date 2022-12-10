<template>
    <div v-if="stay" class="order-container">
            <p class="reservation-no-dates-header" v-if="(!range.start || !range.end)">Add dates for prices</p>
        <section class="order-form-header">
            <div v-if="(range.start && range.end)" class="order-form-header-secondary">
                <p><span class="cost">{{ currencyCode }}</span></p>
                <p><span class="cost">{{ stay.price }}</span> </p>
                <p class="cost-price unit">&nbspnight</p>
            </div>
            <div class="order-form-header-secondary reviews flex align-center">
                <div>
                    <i class="fa-solid fa-star reservation"></i>
                </div>
                <div>
                    <p>{{ stayRate }}</p>
                </div>
                <p> &nbsp&#183&nbsp </p>
                <p><span class="reviews">
                        <a href="#">{{ stay.reviews.length }} reviews</a>
                    </span></p>
            </div>
        </section>
        <section class="order-data">
            <div class="date-picker">
                <div @click="openCalender" class="date-input">
                    <label>CHECK-IN</label>
                    <input :disabled="true">{{ date(range.start) }}
                    <button @click="(range.start = null),(range.end = null)" v-if="range.start"><svg viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                        </svg></button>
                </div>
                <div @click="openCalender" class="date-input">
                    <label>CHECKOUT</label>
                    <input :disabled="true">{{ date(range.end) }}
                    <button @click="(range.end = null)" v-if="range.end"><svg viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                        </svg></button>
                        <div>
                          
                    <Date-picker  v-click-outside="closeCalenderModal" @click.stop="openCalender" v-if="calenderOpen" class="details-page-calender secondary"  :attributes="attributes" v-model="range" is-range :columns="2"   color="gray" />
                        </div>
                </div>
            </div>
            <div>
                <div @click="toggleGuestsModal" class="guest-input">
                    <label>GUESTS</label>
                    <div class="input-container flex" :class="[{ wide : totalGuests > 9}]">
                        <input  :value="totalGuests">
                        <span class="guests-display"> {{guestDisplay}}</span>
                    </div>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"/></g>
                    </svg>
                    <guestsModal v-click-outside="toggleGuestsModal" @click.stop="" v-if="guestsModalOpen"
                        @counterChanged="counterChanged" :class="[{ 'details-page': guestsModalOpen }]" />
                </div>
            </div>
        </section>
        
        <div @click="setReservation" class="btn-container">
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
                    <span>{{ reservationButton }}</span>
                </button>
            </div>
        </div>
        <div v-if="this.range.start && this.range.end" class="reservation-price-container">
            <div class="flex space-between">
                <div class="reservation-price">
                    <span>{{ currencyCode }}{{ stay.price }} x {{ stayDuration }} nights</span>
                </div>
                <div>
                    <span class="reservation-price-summary">{{ currencyCode }}{{ totalStayPrice.toLocaleString() }}</span>
                </div>
            </div>
            <div class="flex space-between">
                <div class="reservation-price extra fees">
                    <span>Cleaning fee</span>
                </div>
                <div class="reservation-price-extra fees">
                    <span>{{ currencyCode }}{{ cleaningFee }}</span>
                </div>
            </div>
            <div class="flex space-between">
                <div class="reservation-price extra fees">
                    <span>Service fee</span>
                </div>
                <div class="reservation-price-extra fees">
                    <span>{{ currencyCode }}{{ serviceFee }}</span>
                </div>
            </div>
            <div class="flex space-between">
                <div class="reservation-price extra fees">
                    <span>Taxes</span>
                </div>
                <div class="reservation-price-extra fees">
                    <span>{{ currencyCode }}{{ taxes }}</span>
                </div>
            </div>
            <div class="reservation-total flex space-between">
                <div class="reservation-price-total text">
                    <span>Total</span>
                </div>
                <div>
                    <span class="reservation-price-total sum">{{ currencyCode }}{{ totalPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { range } from 'lodash'
import guestsModal from '../cmps/stay-guests-modal.vue'

export default {
    props: {
        stay: Object,
        // range: Object
    },
    data() {
        return {
            stayPrice: null,
            cleaningFee: 63,
            serviceFee: 54,
            taxes: 25,
            reservationStatus: null,
            numberOfGuest: null,
            duration: null,
            guestsModalOpen: false,
            totalGuests: 1,
            order: null,
            calenderOpen: false,
            range: {
                start: null,
                end: null
            }
        }
    },
    methods: {
        openCalender() {
            if ((this.calenderOpen) && (!this.range.start || !this.range.end))return
            this.calenderOpen = !this.calenderOpen
           
            // this.$emit('updateCalender' , this.range)
        },
        closeCalenderModal(){
            this.calenderOpen = false
        },
        toggleGuestsModal() {
            this.guestsModalOpen = !this.guestsModalOpen
        },
        date(date) {
            return (date) ? new Date(date).toLocaleDateString() : 'Add dates'
        },
        counterChanged(totalGuests) {
            this.totalGuests = totalGuests;
        },
        setReservation() {
            if (this.range.start && this.range.end) {
                this.reservationStatus = 'confirm-send'
                const order = {
                    currencyCode : this.stay.currencyCode,
                    hostId: this.stay.host._id,
                    createdAt: Date.now(),
                    price:{
                        price: this.stay.price,
                        fees: this.cleaningFee + this.serviceFee + this.taxes,
                        totalPrice:this.totalStayPrice,
                    },
                    stay: {
                        thumbnail: this.stay.imgUrls[0],
                        stayId: this.stay._id,
                        name: this.stay.name,
                        loc: this.stay.loc
                    },
                    startDate: this.date(this.range.start),
                    endDate: this.date(this.range.end),
                    guests: this.totalGuests,
                    // range: this.range,
                    duration: this.duration,
                    mesgs: [],
                    buyer: this.$store.getters.loggedinUser || null,
                    status: `pending`,
                }
                // CHECK DECONSTRUCTION OPTION OR SENDING STAY AS WHOLE
                this.$emit('orderSent',order)
                
            }
        },
    },
    computed: {
        guestDisplay() {
            return (this.totalGuests === 1) ? 'guest' : 'guests'
        },
        reservationButton() {
            if (this.reservationStatus === null && !this.range.start || !this.range.end) {
                return 'Check availability'
            } else if (this.reservationStatus === null && this.range.start && this.range.end) {
                return 'Reserve'
            }
            else if (this.reservationStatus === 'confirm-send') {
                return 'Reserved'
            }
        },
        currencyCode() {
            if (this.stay.currencyCode === 'USD') return '$'
            if (this.stay.currencyCode === 'EUR') return '€'
            if (this.stay.currencyCode === 'ILS') return '₪'
        },
        totalStayPrice() {
            this.stayPrice = ((this.duration) * (this.stay.price))
            return (this.stayPrice)
        },
        stayRate() {
            let rateSum = 0
            this.stay.reviews.forEach(review => {
                rateSum += review.rate
            })
            return (rateSum / this.stay.reviews.length).toFixed(2)
        },
        stayDuration() {
            if (this.range.start && this.range.end)
                this.duration = (((this.range.end - this.range.start) / (1000 * 3600 * 24))).toFixed(0)
            return this.duration
        },
        totalPrice() {
            return (this.stayPrice + this.serviceFee + this.cleaningFee + this.taxes).toLocaleString()
        },
    },
    
    components: {
        guestsModal,
        
    }
}
</script>

