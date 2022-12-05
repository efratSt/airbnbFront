<template>
    <div>
        <button @click="$emit('toggleAmenities')" class="close-amenities-modal">
            <svg class="close-amenities-modal svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg></button>  
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