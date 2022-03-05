<template>
    <button class="absolute -top-8 right-6 font-bold hover:bg-[#00cba9] hover:text-white bg-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 border-[#00cba9]"
        :class="shade">
        <slot></slot>
    </button>
</template>

<script setup>
import { ref } from 'vue';
defineProps(['shade']);

</script>

<style scoped>
.black{
    box-shadow: 10px 5px 20px rgba(0,0,0,0.7);
}
.white{
    box-shadow: 10px 5px 20px rgba(255,255,255,0.7);
}

</style>
