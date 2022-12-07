<template>
    <div v-if="stay" class="order-container">
        <section class="order-form-header">
            <div class="order-form-header-secondary">
                <p><span class="cost">{{ currencyCode }}</span></p>
                <p><span class="cost">{{ stay.price }}</span> </p>
                <p class="cost-price unit">&nbspnight</p>
            </div>
            <div class="order-form-header-secondary reviews">
                <p><i class="fa-solid fa-star"></i>{{ stayRate }}</p>
                <p> &nbsp&#183&nbsp </p>
                <p><span class="reviews">
                        <a href="#">{{ stay.reviews.length }} reviews</a>
                    </span></p>
            </div>
        </section>
        <section class="order-data">
            <div class="date-picker">
                <div @click="moveCalender" class="date-input">
                    <label>CHECK-IN</label>
                    <input :disabled="true">{{ date(range.start) }}
                    <button @click="(range.start = null)" v-if="range.start"><svg viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                        </svg></button>
                </div>
                <div @click="moveCalender" class="date-input">
                    <label>CHECKOUT</label>
                    <input>{{ date(range.end) }}
                    <button @click="(range.end = null)" v-if="range.end"><svg viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                        </svg></button>
                    <!-- <Date-picker v-if="(!this.range.start && !this.range.end)" class="details-page-calender secondary" v-model="range" is-range :columns="2" color="gray" /> -->
                </div>
            </div>
            <div>
                <div @click="toggleGuestsModal" class="guest-input">
                    <label>GUESTS</label>
<<<<<<< HEAD
                    <input :value="totalGuests"> {{ guestDisplay }}
=======
                    <div class="input-container flex">
                        <input  :value="totalGuests">
                        <span>{{guestDisplay}}</span>
                    </div>
>>>>>>> 9560cb7b653d6361038eb96bbcd898b3f3a35211
                    <svg viewBox="0 0 320 512" width="100" title="angle-down">
                        <path
                            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
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
                    <span>Other fee</span>
                </div>
                <div class="reservation-price-extra fees">
                    <span>{{ currencyCode }}{{ extraFee }}</span>
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
        range: Object
    },
    data() {
        return {
            stayPrice: null,
            extraFee: 303,
            reservationStatus: null,
            numberOfGuest: null,
            duration: null,
            guestsModalOpen: false,
            totalGuests: 1,
        }
    },
    methods: {
        moveCalender() {
            this.$emit('moveCalender')
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
                    hostId: this.stay.host._id,
                    createdAt: Date.now(),
                    price: this.totalStayPrice,
                    stay: {
                        stayId: this.stay._id,
                        name: this.stay.name,
                    },
                    startDate: this.range.start,
                    endDate: this.range.end,
                    guests: this.totalGuests,
                    // range: this.range,
                    duration: this.duration,
                    mesgs: [],
                    status: `pending`
                }
                this.sendOrder(order)
            }
        },
        async sendOrder(order) {
            await this.$store.dispatch({ type: 'addOrder', order })
        }
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
            return (this.stayPrice + this.extraFee).toLocaleString()
        },
    },
    components: {
        guestsModal
    }
}
</script>

