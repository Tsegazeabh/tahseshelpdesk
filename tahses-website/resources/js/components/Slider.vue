<template>
    <div>
        <Splide :options="options">
            <SplideSlide>
                <img class="object-cover w-full" src="../../assets/images/img1.png" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img class="object-cover w-full" src="../../assets/images/img2.png" alt="Sample 2">
            </SplideSlide>
            <SplideSlide>
                <img class="object-cover w-full" src="../../assets/images/img3.jpg" alt="Sample 2">
            </SplideSlide>
            <SplideSlide>
                <img class="object-cover w-full" src="../../assets/images/img4.jpg" alt="Sample 2">
            </SplideSlide>
            <SplideSlide>
                <img class="object-cover w-full" src="../../assets/images/img5.jpg" alt="Sample 2">
            </SplideSlide>
            <SplideSlide>
                <img class="object-cover w-full" src="../../assets/images/img6.jpg" alt="Sample 2">
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
const options = reactive({
    rewind: true,
    gap: 0,
    type: 'loop',
    perPage: 1,
    autoplay: 'play',
    height: '38vw',
    width: '100%',

})

</script>

<style scoped>

</style>
