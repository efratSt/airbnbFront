<template>
    <section class="search-modal">
        <div class="search-container">
            <div class="search-line">
                <div class="where search-line-btn">
                    <p>Where</p>
                    <input type="text" placeholder="Search destination " />
                </div>
                <div class="break-point"></div>
                <div @click="calOpen" class="check-in search-line-btn">
                    <p>Check in</p>
                    <span>{{ date(range.start) }}</span>
                </div>
                <div class="break-point"></div>
                <div @click="calOpen" class="check-out search-line-btn">
                    <p>Check out</p>
                    <span>{{ date(range.end) }}</span>
                </div>
                <div class="break-point"></div>
                <div class="last-search">
                    <div @click="guestOpen" class="who search-line-btn">
                        <p>Who</p>
                        <span>{{ guests }} guests</span>
                    </div>
                    <div class="search-btn">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style="
                                display: block;
                                fill: none;
                                height: 12px;
                                width: 12px;
                                stroke: currentcolor;
                                stroke-width: 5.33333;
                                overflow: visible;
                            "
                        >
                            <g fill="none">
                                <path
                                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <stay-guests-modal
                    v-if="isGuestOpen"
                    @counterChanged="counterChanged"
                />
            </div>
            <Date-picker
                class="calender-search"
                v-if="isCalOpen"
                v-model="range"
                is-range
                :columns="2"
                color="gray"
            />
        </div>
    </section>
</template>

<script>
import stayGuestsModal from './stay-guests-modal.vue';
export default {
    data() {
        return {
            range: {
                start: null,
                end: null,
            },
            isGuestOpen: false,
            isCalOpen: false,
            totalGuests: 0,
        };
    },

    methods: {
        date(date) {
            return date ? new Date(date).toLocaleDateString() : 'Add dates';
        },

        calOpen() {
            this.isCalOpen = !this.isCalOpen;
            this.isGuestOpen = false;
        },

        guestOpen() {
            this.isGuestOpen = !this.isGuestOpen;
            this.isCalOpen = false;
        },

        counterChanged(totalGuests) {
            this.totalGuests = totalGuests;
        },
    },

    computed: {
        guests() {
            return !this.totalGuests ? 'Add' : this.totalGuests;
        },
    },

    components: {
        stayGuestsModal,
    },
};
</script>
