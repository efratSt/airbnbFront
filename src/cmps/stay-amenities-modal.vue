<template>
    <div>
        <button @click="$emit('toggleAmenities')" class="close-amenities-modal">X</button>  
        <ul class="stay-amenities-list-modal clean-list">
            <li class="stay-amenity-modal"
                v-for="(amenity, idx) in amenities"
                :key="idx"
                :class="amenity"> 
                <object class="amenity-icon-modal" :data="this.getSource(amenity)" width="24" height="24"></object>
                        {{ amenity }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props:{
    amenities: Array
  },
  data() {
   return{
         }
 },
 methods: {
        getSource(amenity) {            
        const source = `src/assets/icons/${amenity}`.toLowerCase()+'.svg'
        return source
        },
}
}
</script>