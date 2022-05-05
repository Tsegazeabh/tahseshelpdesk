<template>
    <div class="overflow-y-auto">
<!-- navbar -->
        <nav-bar></nav-bar>
        <notifications position="top center" class="mt-10"/>

<!-- content goes here -->
        <slot></slot>

<!-- footer -->
        <my-footer></my-footer>
    </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import NavBar from '@components/Navbar';
import MyFooter from '@components/MyFooter';
import useCompanyInfo from "@composable/public/public_company_info";

 let showMenu = ref(false)
const { company, fetchCompanyInfo } = useCompanyInfo();

 onMounted(fetchCompanyInfo);
 provide('company',company);

</script>

<style scoped>

</style>
