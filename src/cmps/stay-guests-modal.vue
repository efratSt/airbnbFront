<template>
    <section class="guests-modal">
        <div class="guests-counter">
            <div class="counter-details">
                <p>Adults</p>
                <span>Ages 13 or above</span>
            </div>
            <section class="simple-counter">
                <button
                    :disabled="adultsCounter <= 1"
                    @click="changeCounter(-1, 'adults')"
                >
                    -
                </button>
                <span class="counter">{{ adultsCounter }}</span>
                <button
                    :disabled="adultsCounter >= 8"
                    @click="changeCounter(1, 'adults')"
                >
                    +
                </button>
            </section>
        </div>
        <div class="break-line"></div>
        <div class="guests-counter">
            <div class="counter-details">
                <p>Children</p>
                <span>Ages 2-12</span>
            </div>
            <section class="simple-counter">
                <button
                    :disabled="childrenCounter <= 0"
                    @click="changeCounter(-1, 'children')"
                >
                    -
                </button>
                <span class="counter">{{ childrenCounter }}</span>
                <button
                    :disabled="childrenCounter >= 8"
                    @click="changeCounter(1, 'children')"
                >
                    +
                </button>
            </section>
        </div>
        <div class="break-line"></div>
        <div class="guests-counter">
            <div class="counter-details">
                <p>Infants</p>
                <span>Under 2</span>
            </div>
            <section class="simple-counter">
                <button
                    :disabled="infantsCounter <= 0"
                    @click="changeCounter(-1, 'infants')"
                >
                    -
                </button>
                <span class="counter">{{ infantsCounter }}</span>
                <button
                    :disabled="infantsCounter >= 8"
                    @click="changeCounter(1, 'infants')"
                >
                    +
                </button>
            </section>
        </div>
        <div class="break-line"></div>
        <div class="guests-counter">
            <div class="counter-details">
                <p>Pets</p>
                <span><a href="#">Bringing a service animal? </a></span>
            </div>
            <section class="simple-counter">
                <button
                    :disabled="petsCounter <= 0"
                    @click="changeCounter(-1, 'pets')"
                >
                    -
                </button>
                <span class="counter">{{ petsCounter }}</span>
                <button
                    :disabled="petsCounter >= 8"
                    @click="changeCounter(1, 'pets')"
                >
                    +
                </button>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    props :{
        guests: Number
    },
    data() {
        return {
            adultsCounter: 1,
            childrenCounter: 0,
            infantsCounter: 0,
            petsCounter: 0,
        }
    },
    methods: {
        changeCounter(diff, countType) {
            if (countType === 'adults') this.adultsCounter += diff
            else if (countType === 'children') this.childrenCounter += diff
            else if (countType === 'infants') this.infantsCounter += diff
            else this.petsCounter += diff
            let totalGuests = this.adultsCounter + this.childrenCounter
            this.$emit('counterChanged', totalGuests)
        },
    },
    created(){
        if(this.guests) this.adultsCounter = this.guests
    }
}
</script>
