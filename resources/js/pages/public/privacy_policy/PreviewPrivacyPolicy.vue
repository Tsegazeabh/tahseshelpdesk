<template>
    <home-layout>
        <div class="flex flex-col justify-center items-center p-6 bg-gray-100 overflow-x-hidden my-4">
            <h2 class="text-center font-bold p-4 m-2 uppercase text-xl font-normal tracking-wide">Privacy Policy</h2>
            <!-- title and description -->
            <div v-for="privacy in privacy_policy" :key="privacy.id" class="p-6 w-[80vw] mx-auto">
                <h3 class="text-left uppercase mt-2 text-gray-800">{{ privacy.title }}</h3>
                <p class="text-gray-400 text-sm mb-2">{{getDate(privacy.published_at) }}</p>
                <div class="flex-wrap text-left py-2 px-4 text-gray-700" v-html="privacy.description"></div>
            </div>
        </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicPrivacyPolicy from '@composable/public/public_privacy_policy';
import {onMounted} from "vue";
import helpers from "@composable/helpers";

    const { privacy_policy, previewPrivacyPolicy } = usePublicPrivacyPolicy();
    const { getDate } = helpers();
    const props = defineProps(['id']);

    onMounted(previewPrivacyPolicy(props.id))
</script>

