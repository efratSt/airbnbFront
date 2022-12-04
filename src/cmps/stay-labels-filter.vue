<template>
    <section
        class="stay-labels-filter main-container full"
        :class="{ shadow: scrollPosition }"
    >
        <!-- <div class="icons-wrapper main-container">
            <div class="icons-container" v-for="(icon, idx) in icons" :key="idx">
                <div class="icon btn-label-filter" :class="labels[idx]" @click="filterByLabel(labels[idx])">
                    <img :src="icons[idx]" alt="" />
                    <p>{{ labels[idx] }}</p>
                </div>
            </div>
        </div> -->

        <Carousel class="icons-wrapper main-container" :settings="settings">
            <Slide v-for="(icon, idx) in icons" :key="idx">
                <div
                    class="carousel__item icon btn-label-filter"
                    :class="labels[idx]"
                    @click="filterByLabel(labels[idx])"
                >
                    <img :src="icons[idx]" alt="" />
                    <p>{{ labels[idx] }}</p>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

        <!-- 
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(icon, idx) in icons" :key="idx">
                <div class="carousel__item">
                    <div class="icon btn-label-filter" :class="labels[idx]" @click="filterByLabel(labels[idx])">
                        <img :src="icons[idx]" alt="" />
                        <p>{{ labels[idx] }}</p>
                    </div>
                </div>
            </Slide>


            <template #addons>
                <Navigation />
            </template>
        </Carousel> -->

        <!-- 
        <el-carousel :autoplay="false" :pause-on-hover="false" :loop="false" type="card" height="150px" indicator-position="none"
>
            <el-carousel-item class="icons-wrapper main-container"  v-for="(icon, idx) in icons" :key="idx">
                <div class="icons-container">
                    <div class="icon btn-label-filter" justify="center" :class="labels[idx]" @click="filterByLabel(labels[idx])">
                        <img :src="icons[idx]" alt="" />
                        <p>{{ labels[idx] }}</p>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel> -->
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    data() {
        return {
            icons: [
                'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg',
                'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg',
                'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
                'https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg',
                'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg',
                'https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg',
                'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
                'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
                'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
                'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
                'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
                'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',
                'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
                'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
                'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg',
                'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
                'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
                'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
                'https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg',
                'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
                'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
                'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
                'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg',
                'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
                'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg',
                'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
                'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
            ],
            labels: [
                'new',
                'top of the world',
                'trending',
                'adapted',
                'play',
                'hanoks',
                'private rooms',
                'omg!',
                'amazing views',
                'castles',
                'cabinets',
                'mansions',
                'luxe',
                'design',
                'treehouses',
                'tropical',
                'iconic cities',
                'amazing pools',
                'creative spaces',
                'lake front',
                'tiny homes',
                'beachfront',
                'off-the-grid',
                'countryside',
                'ski-in/out',
                'caves',
                'islands',
            ],
            scrollPosition: null,
            settings: {
                itemsToShow: 9.5,
                snapAlign: 'center',
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 9.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 9.5,
                    snapAlign: 'start',
                },
            },
        };
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        filterByLabel(label) {
            console.log(label);
        },
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
};
</script>

<style>
/* .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
} */
</style>
