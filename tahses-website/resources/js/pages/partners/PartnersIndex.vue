<template>
<!--    competency cards-->
    <div class="mx-auto my-4 py-6">
        <slider :options="options" :img_src="img_src" :partners="true"></slider>
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
        pagination: false,
        perPage: 3,
        breakpoints: {
            640: {
                perPage: 1,
                width: '70%',
                height: '25vh'
            },
        },
        perMove: 1,
        autoplay: 'play',
        height: '28vh',
        width: '80%',
        hasSliderWrapper: true,
    })
    const img_src = reactive([
            {img:'img1.png', title:'Ethiopian Electric Utility Organization'},
            {img:'img2.png', title:'Ethiopian Chemical and Constructions input industry'},
            {img:'img3.jpg', title:'Ethiopian Telecommunication'},
            {img:'img4.jpg', title:'Ethiopian Ministry of Education'},
            {img:'img5.jpg', title:'this is partner1'},
            {img:'img6.jpg', title:'this is partner2'}
    ]);


</script>

<style scoped>

</style>
