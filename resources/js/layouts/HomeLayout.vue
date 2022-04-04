<template>
    <div class="overflow-y-auto">
<!-- nabar -->

        <nav-bar></nav-bar>

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
import { notify } from "@kyvg/vue3-notification";

 let showMenu = ref(false)

onMounted(()=>{
    notify({
        title: "Vue 3 notificationVue 3 notificationVue 3 notificationVue 3 notification 🎉",
        type:"success"
    });
    notify({
        title: "Vue 3 notification 🎉",
        type:"warn"
    });
    notify({
        title: "Vue 3 notification 🎉",
        type:"error"
    });
})
</script>

<style scoped>

</style>
