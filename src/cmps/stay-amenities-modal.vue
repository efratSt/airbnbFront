<template>
  <div>
    <div class="button-container">
      <button @click="$emit('toggleAmenities')" class="close-amenities-modal">
        <svg
          class="close-amenities-modal svg"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="
            display: block;
            fill: none;
            height: 16px;
            width: 16px;
            stroke: currentcolor;
            stroke-width: 3;
            overflow: visible;
          ">
          <path d="m6 6 20 20"></path>
          <path d="m26 6-20 20"></path>
        </svg>
      </button>
    </div>
    <h2>What this place offers</h2>
    <ul class="stay-amenities-list-modal clean-list">
      <li
        class="stay-amenity-modal"
        v-for="(amenity, idx) in amenities"
        :key="idx"
        :class="amenity">
        <img
          class="amenity-icon-modal"
          :src="this.getSource(amenity)"
          width="24"
          height="24" />
        {{ amenity }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      amenities: Array,
    },
    data() {
      return {}
    },
    methods: {
      getSource(amenity) {
        const fileAmenity = amenity.toLowerCase().replaceAll(' ', '_')
        const source = `../assets/ICON_S/${fileAmenity}` + '.svg'
        return source
      },
    },
  }
</script>
