<template>
    <div class="overflow-y-auto">
<!-- nabar -->

        <nav-bar></nav-bar>
        <notifications position="top center" class="mt-10"/>

<!-- content goes here -->
        <slot></slot>
<!-- footer -->
        <my-footer></my-footer>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import NavBar from '../components/Navbar';
import MyFooter from '../components/MyFooter';

 let showMenu = ref(false)

</script>

<style scoped>

</style>
