<template>

           <footer class="bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-start">
               <div v-if="company" class="px-6 text-start">
                   <div class="flex items-center">
                       <i class="mr-2 text-primary fas fa-leaf fa-xl inline-flex"></i><h3 class="p-2 font-bold text-start inline-flex capitalize">
                       {{ company.title }}</h3>
                   </div>
                   <p class="whitespace-normal text-sm p-2 ml-8">{{company.description}}</p>
               </div>
               <div class="flex flex-col justify-center items-center text-start">
                   <router-link :to="{name:'home'}" class="p-2 hover:underline">Home</router-link>
                   <router-link :to="{name:'about.index'}" class="p-2 hover:underline">About us</router-link>
                   <router-link :to="{name:'products.index'}" class="p-2 hover:underline">Products</router-link>
                   <router-link :to="{name:'services.index'}" class="p-2 hover:underline">Services</router-link>
                   <router-link :to="{name:'customers.index'}" class="p-2 hover:underline">Customers</router-link>
                   <router-link :to="{name:'contact_us.index'}" class="p-2 hover:underline">Contact us</router-link>
               </div>
               <div class="flex flex-col justify-center items-center text-start">
                   <router-link :to="{name:'privacy_policy.index'}" class="p-2 hover:underline">Privacy Policy</router-link>
                   <router-link :to="{name:'terms_of_use.index'}" class="p-2 hover:underline">Terms of Use</router-link>
                   <router-link :to="{name:'home'}" class="p-2 hover:underline">Site Map</router-link>
                   <a class="md:py-2 py-1 md:px-6 px-2 bg-[#078282ff] rounded-full border border-white hover:border-[#078282ff] border-2 text-white hover:bg-gray-100 hover:text-[#078282ff] shadow-md" :href="constants.information.help_desk_link" target="_blank">Help Desk<i class="ml-2 fas fa-laptop"></i></a>
                   <div class="flex justify-around items-center text-[#078282ff]">
                       <a :href="constants.social_media.facebook" target="_blank" class="p-2" href="#"><i class="fab fa-facebook"></i></a>
                       <a :href="constants.social_media.twitter" target="_blank" class="p-2" href="#"><i class="fab fa-twitter"></i></a>
                       <a :href="constants.social_media.telegram" target="_blank" class="p-2" href="#"><i class="fab fa-telegram"></i></a>
                       <a :href="constants.social_media.instagram" target="_blank" class="p-2" href="#"><i class="fab fa-instagram"></i></a>
                   </div>
               </div>
           </footer>
    <div v-if="company" class="p-3 text-sm font-medium text-center capitalize bg-primary text-white">copy right &copy {{year}} {{ company.title }} P.L.C, All Rights Reserved. </div>
    <div v-else class="p-3 text-sm font-medium text-center capitalize bg-primary text-white">copy right &copy {{year}} Tahses ICT and Consultancy P.L.C, All Rights Reserved. </div>
<!--[#00cba9]-->
</template>

<script setup>
import {onMounted, ref, computed} from 'vue';
import helpers from "@composable/helpers";
import useCompanyInfo from "@composable/public/public_company_info";

const { company, fetchCompanyInfo } = useCompanyInfo();
const { constants } = helpers();
let showMenu = ref(false)

let year = ref(new Date().getFullYear());

const tahses = computed(() => {
    if (company){
        return company.title;
    }
    else{
        return 'Tahses ICT and Consultancy';
    }
})
onMounted(fetchCompanyInfo);

</script>
