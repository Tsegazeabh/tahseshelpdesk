<template>
<!--    competency cards-->
    <div class="mx-auto my-4 p-2">
        <slider :options="options" :img_src="img_src" :mode="true"></slider>
    </div>

</template>

<script setup>
    import { ref } from 'vue';
    import slider from '../../components/Slider';
    import {reactive} from 'vue';

    const options = reactive({
        rewind: true,
        gap: 50,
        type: 'loop',
        perPage: 4,
        autoplay: 'play',
        height: '20vh',
        width: '100%',
        hasSliderWrapper: true,
    })
    const img_src = reactive([
            {img:'img1.png', title:'this is partner0'},
            {img:'img2.png', title:'this is partner1'},
            {img:'img3.jpg', title:'this is partner2'},
            {img:'img4.jpg', title:'this is partner3'},
            {img:'img5.jpg', title:'this is partner4'},
            {img:'img6.jpg', title:'this is partner5'}
    ]);


</script>

<style scoped>

</style>
