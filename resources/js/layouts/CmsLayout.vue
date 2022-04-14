<template>
    <div class="flex bg-gray-200 font-roboto overflow-y-hidden m-0 max-h-screen">
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"></div>
<!--        side bar        -->
        <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed inset-y-0 left-0 z-30 w-64 min-w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center">
                    <i class="text-white fas fa-leaf fa-xl"></i>
                    <span class="mx-2 text-2xl font-semibold text-white">Tahses</span>
                </div>
            </div>

            <nav class="mt-10">

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'cms' }">
                    <span class="mx-3">About</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"  :to="{ name:'services' }">
                    <span class="mx-3">Services</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'products' }">
                    <span class="mx-3">Products</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'customers' }">
                    <span class="mx-3">Customers</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'competencies' }">
                    <span class="mx-3">Competencies</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'news' }">
                    <span class="mx-3">News</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'carousel_gallery' }">
                    <span class="mx-3">Carousel Gallery</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'partners' }">
                    <span class="mx-3">Partners</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'terms_of_use' }">
                    <span class="mx-3">Terms of Use</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'privacy_policy' }">
                    <span class="mx-3">Privacy Policy</span>
                </router-link>

                <router-link class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" :to="{ name:'contact_us' }">
                    <span class="mx-3">Contact Us Requests</span>
                </router-link>

                <router-link :to="{name:'company_info'}" class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">

                        </path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" ></path></svg>

                    <span class="mx-3">Company</span>
                </router-link>


            </nav>
        </div>

        <div class="flex-1 flex flex-col">
            <header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-[#56af5D]">
                <div class="flex items-center">
                    <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                </div>

                <div class="flex items-center">
                    <div class="relative">
                        <button @click="dropdownOpen = ! dropdownOpen" class="relative block px-2 overflow-hidden border-l-2 border-[#56af5D] focus:outline-none">
                            Admin
                        </button>

                        <div  v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 z-10 w-full h-full"></div>

                        <div  v-show="dropdownOpen" class="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                            <button @click="profile"  class="block text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-900 hover:text-white w-full">Profile</button>
                            <button @click="logout" class="block text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-900 hover:text-white w-full">Logout</button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="flex-1 overflow-y-auto max-h-screen overflow-x-hidden w-[80vw] bg-gray-200">
                <div class="container mx-auto px-6 py-8">
                        <slot></slot>
                </div>
            </main>
        </div>

    </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, onDeactivated, ref, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import helpers from "@composable/helpers";

    let sidebarOpen = ref(false);
    let dropdownOpen = ref(false);

    const store = useStore();
    const router = useRouter();
    const { constants } = helpers();
    const events = ['click','mousemove','mousedown','scroll','keypress','load'];
    let warningTimer = null;
    let logoutTimer = null;
    let waringZone = ref(false);

    const logout = async() => {
            await store.dispatch('logout');
    }

    function profile(){
        dropdownOpen.value = !dropdownOpen.value;
        router.push('/cms/profile')
    }

    onMounted(()=>{
        events.forEach((event) => {
            window.addEventListener(event,resetTimer)
        });
        setTimers()
    })

onDeactivated(()=>{
        events.forEach((event) => {
            window.removeEventListener(event,resetTimer)
        });
        resetTimer()
    })

    function resetTimer(){
        clearTimeout(warningTimer);
        clearTimeout(logoutTimer);

        setTimers();
    }

    function setTimers(){
        warningTimer = setTimeout(warningMessage, constants.session_expiration_warning);
        logoutTimer = setTimeout(logoutUser, constants.session_expiration_time);

        waringZone.value = false;
    }

    function warningMessage() {
        waringZone.value = true;
    }

    function logoutUser(){
    //    dispatch logout
        logout()
    }

    watch(waringZone,(warning)=>{
        if (warning === true){
        notify({
            title:'Are you still with Us?',
            type:'success'
        })}
    })

</script>

<style scoped>
</style>
