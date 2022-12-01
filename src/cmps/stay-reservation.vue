<template>
    <div class="reservation-element">
        <section class="reservation-header">
            <span class="reservation-price">{{stayPrice}}</span>
            <span class="reservation-price unit"> / night</span>
            <span class="reservation-stay rate"><i class="fa-solid fa-star"></i>{{stay.rate}}</span>
            <span>&#183</span>
            <span><a href="#">
            {{ stay.reviews.length }}
            </a>
            </span>
        </section>
        <section class="reservation-choice">
            <div class="reservation-chosen-dates">
            <span>{{ date(range.start) }} </span> <span>{{ date(range.end) }}</span>
            </div>
            <div class="reservation-guests">
                <select v-model="selected">
                    <option disabled value="">Please select one</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </section>
        <button class="reservation btn"> Reserve </button>
        <span>You won't be charged yet</span>
        <span class="reservation-price summary">{{stayPrice}} x {{stayDuration}}</span>
        <span class="reservation-price summary">{{totalStayPrice}}</span>
        <span v-if="extras" class="reservation-price extras">Service fee{{extra.fee}}</span>
        <span class="reservation-price total">{{totalPrice}}</span>
    </div>
</template>