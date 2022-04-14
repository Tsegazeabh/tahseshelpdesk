<template>
    <home-layout>
        <div v-if="privacy_policy && privacy_policy.length !== 0" class="flex flex-col justify-center items-center p-6 bg-gray-100 overflow-x-hidden my-4">
            <h2 class="text-center font-bold p-4 m-2 uppercase text-xl font-normal tracking-wide">Privacy Policy</h2>
            <!-- title and description -->
            <div v-for="privacy_policies in privacy_policy" :key="privacy_policies.id" class="p-6 w-[80vw] mx-auto">
                <h3 class="text-left uppercase mt-2 text-gray-800">{{ privacy_policies.title }}</h3>
                <p class="text-gray-400 text-sm mb-2">{{getDate(privacy_policies.published_at) }}</p>
                <div class="flex-wrap text-left py-2 px-4 text-gray-700" v-html="privacy_policies.description"></div>
            </div>
        </div>
        <div v-else class="flex justify-center items-center min-h-[30vh]">
            <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicPrivacyPolicy from '@composable/public/public_privacy_policy';
import {onMounted} from "vue";
import helpers from "@composable/helpers";

const { fetchPrivacyPolicy, privacy_policy } = usePublicPrivacyPolicy();
const { getDate } = helpers();

onMounted(fetchPrivacyPolicy)

</script>

