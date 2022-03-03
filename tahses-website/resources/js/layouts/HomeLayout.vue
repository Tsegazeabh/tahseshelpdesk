<template>
    <div>
<!-- nabar -->
        <teleport to="#app">
        <nav-bar></nav-bar>
        </teleport>
<!-- content goes here -->
        <slot></slot>
<!-- footer -->
        <footer>

        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/Navbar';

 let showMenu = ref(false)
</script>

<style scoped>

</style>
