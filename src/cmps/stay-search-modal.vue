<template>
    <section class="search-modal">
        <div class="search-container">
            <div class="search-line">
                <div class="where search-line-btn">
                    <p>Where</p>
                    <input type="text" placeholder="Search destination " />
                </div>
                <div @click="calOpen" class="check-in search-line-btn">
                    <p>Check in</p>
                    <span>{{ date(range.start) }}</span>
                </div>
                <div @click="calOpen" class="check-out search-line-btn">
                    <p>Check out</p>
                    <span>{{ date(range.end) }}</span>
                </div>
                <div class="who search-line-btn">
                    <p>Who</p>
                    <span>Add guests</span>
                </div>
            </div>
            <Date-picker
                class="calender"
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
export default {
    data() {
        return {
            range: {
                start: null,
                end: null,
            },

            isCalOpen: false,
        };
    },

    methods: {
        date(date) {
            return date ? new Date(date).toLocaleDateString() : 'Add dates';
        },

        calOpen() {
            this.isCalOpen = !this.isCalOpen;
        },
    },
};
</script>
