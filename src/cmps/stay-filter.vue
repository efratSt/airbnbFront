<template>
    <section v-if="!isOpen" class="stay-filter" @click="isOpen = true">
        <div class="search-container">
            <div class="place-search search-btn-filter">
                <span>Anywhere</span>
            </div>
            <div class="search-border"></div>
            <div class="date-search search-btn-filter">
                <span>Any week</span>
            </div>
            <div class="search-border"></div>
            <div class="guests-search search-btn-filter">
                <span>Add guests</span>
            </div>
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
    </section>
    <article v-if="isOpen" class="search-modal">
        <form>
            <input type="text" />
            <input type="date" />
            <input type="date" />
            <input type="number" />
        </form>
    </article>
    <div v-if="isOpen" class="screen" @click="isOpen = false"></div>
</template>

<script>
export default {
    name: 'stay-filter',
    data() {
        return {
            isOpen: false,
        };
    },
};
</script>
