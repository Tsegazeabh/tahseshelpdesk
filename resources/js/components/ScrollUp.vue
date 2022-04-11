<template>
    <button @click="scrollToPage" class="p-3 mix-blend-multiply rounded-md bg-primary text-white fixed bottom-8 right-6">
        <i class="fas fa-arrow-alt-circle-up"></i>
    </button>
</template>

<script setup>
function scrollToPage(){
    window.scrollTo({top:0, behavior:"smooth"});
}
</script>

