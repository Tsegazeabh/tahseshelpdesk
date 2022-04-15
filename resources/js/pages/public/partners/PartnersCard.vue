<template>
<!--    partners cards-->
    <the-header title="Our Partners"></the-header>
    <div class="mx-auto my-4 py-6">
        <slider :options="options" :img_src="allPartner" :partners="true" :isLoading="isLoading"></slider>
    </div>

</template>

<script setup>
    import slider from '@components/Slider';
    import {onMounted, reactive} from 'vue';
    import usePublicPartner from "@composable/public/public_partner";
    import TheHeader from '@components/TheHeader';


    const { fetchPartner, allPartner, isLoading } = usePublicPartner();

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
                height: '30vh'
            },
        },
        perMove: 1,
        autoplay: 'play',
        height: '40vh',
        width: '80%',
        hasSliderWrapper: true,
    })

    onMounted(fetchPartner)

</script>
