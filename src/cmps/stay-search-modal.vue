<template>
    <section class="search-modal">
        <div class="search-container">
            <div class="search-line">
                <div
                    @click="searchOpen"
                    class="where search-line-btn"
                    tabindex="1"
                >
                    <p>Where</p>
                    <input
                        type="text"
                        placeholder="Search destination"
                        v-model="filterBy.location"
                    />
                    <div v-if="isSearchOpen" class="search-text-modal">
                        <h3>Recent searches</h3>
                        <div class="search-wrapper">
                            <div class="recent-container">
                                <div
                                    class="recent-loc"
                                    @click.stop="searchRecent('tel aviv')"
                                >
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>Tel Aviv</span>
                                </div>
                                <div
                                    class="recent-loc"
                                    @click.stop="searchRecent('istanbul')"
                                >
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>Istanbul</span>
                                </div>
                                <div
                                    class="recent-loc"
                                    @click.stop="searchRecent('porto')"
                                >
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>Porto</span>
                                </div>
                                <div
                                    class="recent-loc"
                                    @click.stop="searchRecent('new york')"
                                >
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>New York</span>
                                </div>
                            </div>
                            <div @click.stop="flexSearch" class="img-wrapper">
                                <img
                                    src="	https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                                    alt=""
                                />
                                <span>I'm flexible</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="break-point"></div>
                <div
                    @click="calOpen"
                    class="check-in search-line-btn"
                    tabindex="2"
                >
                    <p>Check in</p>
                    <span>{{ date(filterBy.range.start) }}</span>
                </div>
                <div class="break-point"></div>
                <div
                    @click="calOpen"
                    class="check-out search-line-btn"
                    tabindex="3"
                >
                    <p>Check out</p>
                    <span>{{ date(filterBy.range.end) }}</span>
                </div>
                <div class="break-point"></div>
                <div class="last-search">
                    <div
                        @click="guestOpen"
                        class="who search-line-btn"
                        tabindex="4"
                    >
                        <p>Who</p>
                        <span>{{ guests }} guests</span>
                    </div>
                    <div @click="searchStay" class="search-btn">
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
                v-model="filterBy.range"
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
            isGuestOpen: false,
            isCalOpen: false,
            isSearchOpen: false,
            totalGuests: 0,
            filterBy: {
                range: {
                    start: null,
                    end: null,
                },
                location: '',
                guests: 0,
                label: '',
            },
        };
    },

    methods: {
        date(date) {
            return date ? new Date(date).toLocaleDateString() : 'Add dates';
        },

        calOpen() {
            this.isCalOpen = true;
            this.isGuestOpen = false;
            this.isSearchOpen = false;
        },

        guestOpen() {
            this.isGuestOpen = !this.isGuestOpen;
            this.isCalOpen = false;
            this.isSearchOpen = false;
        },

        searchOpen() {
            this.isSearchOpen = true;
            this.isGuestOpen = false;
            this.isCalOpen = false;
        },

        counterChanged(totalGuests) {
            this.totalGuests = totalGuests;
            this.filterBy.guests = totalGuests;
        },

        searchRecent(location) {
            this.filterBy.location = location;
            this.isSearchOpen = false;
        },

        flexSearch() {
            this.filterBy.location = 'barcelona';
            this.isSearchOpen = false;
        },

        searchStay() {
            // console.log('from search modal' ,this.filterBy);
            this.$store.commit({
                type: 'setFilterBy',
                filterBy: { ...this.filterBy },
            });
            this.isSearchOpen = false;
            this.isGuestOpen = false;
            this.isCalOpen = false;
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
