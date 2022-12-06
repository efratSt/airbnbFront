<template>
    <section class="stay-add-form">
        <form>
            <div class="stay-add-info">
                <h3>Stay info</h3>
                <input
                    v-model="stayToAdd.name"
                    type="text"
                    placeholder="Stay name"
                />
                <input
                    v-model="stayToAdd.host.fullName"
                    type="text"
                    placeholder="Host name"
                />
                <input
                    v-model="stayToAdd.loc.country"
                    type="text"
                    placeholder="Country"
                />
                <input
                    v-model="stayToAdd.loc.city"
                    type="text"
                    placeholder="City"
                />
                <input
                    v-model="stayToAdd.loc.address"
                    type="text"
                    placeholder="Address"
                />
            </div>
            <div class="stay-add-details">
                <h3>Stay details</h3>
                <label>
                    Price: $
                    <input v-model="stayToAdd.price" min="0" type="number" />
                </label>
                <label>
                    Capacity
                    <input v-model="stayToAdd.capacity" type="number" min="1" />
                </label>
                <label>
                    Room type
                    <select v-model="stayToAdd.roomType">
                        <option value="Entire place">Entire place</option>
                        <option value="Single room">Single room</option>
                        <option value="Privet section">Privet section</option>
                    </select>
                </label>
                <label>
                    Stay type
                    <select v-model="stayToAdd.type">
                        <option value="Entire place">Beach</option>
                        <option value="Campers">Campers</option>
                        <option value="Amazing pools">Amazing pools</option>
                        <option value="Islands">Islands</option>
                        <option value="Shared homes">Shared homes</option>
                        <option value="Castles">Castles</option>
                    </select>
                </label>
            </div>
            <div class="amenities-checkbox">
                <h3>Amenities</h3>
                <div class="amenities-add">
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="TV"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="Wifi"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="AC"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="Smoking allowed"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="Pets allowed"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="Cooking basics"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="Kitchen"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="Washer"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="Dryer"
                        size="large"
                    />
                    <el-checkbox
                        v-model="stayToAdd.amenities"
                        label="First aid kit"
                        size="large"
                    />
                </div>
            </div>
        </form>
        <div class="desc-imgs">
            <div class="desc">
                <h3>Description</h3>
                <label class="desc">
                    <textarea
                        v-model="stayToAdd.summary"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                </label>
            </div>
            <div class="imgs-uplowd">
                <div class="img-container">
                    <div class="grid-item img-1">Upload Image</div>
                    <div class="grid-item img-2">Upload Image</div>
                    <div class="grid-item img-3">Upload Image</div>
                    <div class="grid-item img-4">Upload Image</div>
                    <div class="grid-item img-5">Upload Image</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            stayToAdd: {
                name: '',
                host: {
                    fullName: '',
                },

                loc: {
                    country: '',
                    city: '',
                    address: '',
                },
                price: 0,
                capacity: 0,
                roomType: '',
                type: '',
                summary: '',
                amenities: [],
            },
        }
    },
}
</script>
