<template>
<!--    <svg viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,288L40,240C80,192,160,96,240,85.3C320,75,400,149,480,170.7C560,192,640,160,720,138.7C800,117,880,107,960,112C1040,117,1120,139,1200,154.7C1280,171,1360,181,1400,186.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>-->
<!--    <svg class="bg-white" viewBox="0 0 960 50"><path fill="#00cba9" stroke-linecap="round" stroke-linejoin="miter" d="M0 21L7.3 20.8C14.7 20.7 29.3 20.3 43.8 23.8C58.3 27.3 72.7 34.7 87.2 36.5C101.7 38.3 116.3 34.7 131 34.2C145.7 33.7 160.3 36.3 174.8 35.7C189.3 35 203.7 31 218.2 27.8C232.7 24.7 247.3 22.3 261.8 24.3C276.3 26.3 290.7 32.7 305.2 31.3C319.7 30 334.3 21 349 19.5C363.7 18 378.3 24 392.8 23.5C407.3 23 421.7 16 436.2 16.7C450.7 17.3 465.3 25.7 480 30.8C494.7 36 509.3 38 523.8 38.8C538.3 39.7 552.7 39.3 567.2 40.2C581.7 41 596.3 43 611 42.2C625.7 41.3 640.3 37.7 654.8 37.2C669.3 36.7 683.7 39.3 698.2 36C712.7 32.7 727.3 23.3 741.8 21C756.3 18.7 770.7 23.3 785.2 25.3C799.7 27.3 814.3 26.7 829 24.8C843.7 23 858.3 20 872.8 23C887.3 26 901.7 35 916.2 35.2C930.7 35.3 945.3 26.7 952.7 22.3L960 18L960 0L952.7 0C945.3 0 930.7 0 916.2 0C901.7 0 887.3 0 872.8 0C858.3 0 843.7 0 829 0C814.3 0 799.7 0 785.2 0C770.7 0 756.3 0 741.8 0C727.3 0 712.7 0 698.2 0C683.7 0 669.3 0 654.8 0C640.3 0 625.7 0 611 0C596.3 0 581.7 0 567.2 0C552.7 0 538.3 0 523.8 0C509.3 0 494.7 0 480 0C465.3 0 450.7 0 436.2 0C421.7 0 407.3 0 392.8 0C378.3 0 363.7 0 349 0C334.3 0 319.7 0 305.2 0C290.7 0 276.3 0 261.8 0C247.3 0 232.7 0 218.2 0C203.7 0 189.3 0 174.8 0C160.3 0 145.7 0 131 0C116.3 0 101.7 0 87.2 0C72.7 0 58.3 0 43.8 0C29.3 0 14.7 0 7.3 0L0 0Z"></path></svg>-->
        <!-- footer -->
           <footer class="bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-start">
               <div class="px-6 text-start">
                   <div class="flex items-center">
                       <i class="mr-2 text-primary fas fa-leaf fa-xl inline-flex"></i><h3 class="p-2 font-bold text-start inline-flex">Tahses Software Development and Consultancy</h3>
                   </div>
                   <p class="whitespace-normal text-sm p-2 ml-8">is a private business company established in 2012 by a team of experienced professionals whose specializations are Computer Science, Computer Engineering, Communication Engineering, Electronics Engineering, Electrical Engineering, Marketing, Finance and Law and with extensive experience in ICT.</p>
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
    <div class="p-3 text-sm font-medium text-center capitalize bg-primary text-white">copy right &copy {{year}} Tahses software development and consultancy P.L.C, All Rights Reserved. </div>
<!--[#00cba9]-->
</template>

<script setup>
import { ref } from 'vue';
import helpers from "@composable/helpers";

const { constants } = helpers();
let showMenu = ref(false)

let year = ref(new Date().getFullYear());

</script>
