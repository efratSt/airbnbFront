<template>
    <section class="guests-modal">
        <div class="guests-counter">
            <div class="counter-details">
                <p>Adults</p>
                <span>Ages 13 or above</span>
            </div>
            <section class="simple-counter">
                <button
                    :disabled="adultsCounter <= 0"
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
    </section>
</template>

<script>
export default {
    data() {
        return {
            adultsCounter: 0,
            childrenCounter: 0,
        };
    },
    methods: {
        changeCounter(diff, countType) {
            if (countType === 'adults') this.adultsCounter += diff;
            else this.childrenCounter += diff;
            let totalGuests = this.adultsCounter + this.childrenCounter;
            this.$emit('counterChanged', totalGuests);
        },
    },
};
</script>
