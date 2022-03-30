<template>
    <div class="flex justify-center items-center min-h-screen font-bold text-lg text-gray-900">
        <h1>Sorry, Page Not Found :(</h1>
        <button @click="Back" class="ml-2 p-2 rounded-md text-white bg-gray-400 hover:bg-gray-700">Go Back</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function Back(){
    router.back();
}
</script>
