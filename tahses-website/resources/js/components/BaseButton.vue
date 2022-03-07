<template>
    <button :class="shade">
        <slot></slot>
    </button>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['shade']);
</script>

