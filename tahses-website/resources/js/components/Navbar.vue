<template>
        <!-- header -->
            <header class="md:flex block p-1  mx-auto flex-wrap md:justify-between md:items-center bg-[#00cba9]">
                <div class="info ml-6 pl-4 flex flex-wrap items-center md:space-y-0 md:space-x-8 text-white text-sm">
                    <p class="mr-2 py-2 md:py-0"><i class="fas fa-envelope"></i> thetahses@info</p>
                    <p class="mr-2 py-2 md:py-0"><i class="fas fa-location"></i> 22 Rewina building 4th floor</p>
                    <p class="py-2 md:py-0"><i class="fas fa-phone"></i> +251-11-896-43-43</p>
                </div>
                <!-- social media icons -->
                <div class="social ml-4 pl-6 pt-2 flex md:justify-evenly justify-items-center items-center mb-2 space-x-4 md:space-x-4 md:mr-8 md:pr-4 text-white">
                    <a class="md:py-2 py-1 md:px-6 px-2 bg-[#078282ff] rounded-full border border-white border-2 text-white hover:bg-gray-100 hover:text-[#078282ff] shadow-md" href="#">Help Desk<i class="ml-2 fas fa-laptop"></i></a>
                    <a href="#"><i class="fab fa-facebook hover:text-gray-900"></i></a>
                    <a href="#"><i class="fab fa-twitter hover:text-gray-900"></i></a>
                    <a href="#"><i class="fab fa-telegram hover:text-gray-900"></i></a>
                    <a href="#"><i class="fab fa-instagram hover:text-gray-900"></i></a>
                </div>
            </header>
<!--    <svg viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,288L40,240C80,192,160,96,240,85.3C320,75,400,149,480,170.7C560,192,640,160,720,138.7C800,117,880,107,960,112C1040,117,1120,139,1200,154.7C1280,171,1360,181,1400,186.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>-->
    <svg class="bg-white" viewBox="0 0 960 50"><path fill="#00cba9" stroke-linecap="round" stroke-linejoin="miter" d="M0 21L7.3 20.8C14.7 20.7 29.3 20.3 43.8 23.8C58.3 27.3 72.7 34.7 87.2 36.5C101.7 38.3 116.3 34.7 131 34.2C145.7 33.7 160.3 36.3 174.8 35.7C189.3 35 203.7 31 218.2 27.8C232.7 24.7 247.3 22.3 261.8 24.3C276.3 26.3 290.7 32.7 305.2 31.3C319.7 30 334.3 21 349 19.5C363.7 18 378.3 24 392.8 23.5C407.3 23 421.7 16 436.2 16.7C450.7 17.3 465.3 25.7 480 30.8C494.7 36 509.3 38 523.8 38.8C538.3 39.7 552.7 39.3 567.2 40.2C581.7 41 596.3 43 611 42.2C625.7 41.3 640.3 37.7 654.8 37.2C669.3 36.7 683.7 39.3 698.2 36C712.7 32.7 727.3 23.3 741.8 21C756.3 18.7 770.7 23.3 785.2 25.3C799.7 27.3 814.3 26.7 829 24.8C843.7 23 858.3 20 872.8 23C887.3 26 901.7 35 916.2 35.2C930.7 35.3 945.3 26.7 952.7 22.3L960 18L960 0L952.7 0C945.3 0 930.7 0 916.2 0C901.7 0 887.3 0 872.8 0C858.3 0 843.7 0 829 0C814.3 0 799.7 0 785.2 0C770.7 0 756.3 0 741.8 0C727.3 0 712.7 0 698.2 0C683.7 0 669.3 0 654.8 0C640.3 0 625.7 0 611 0C596.3 0 581.7 0 567.2 0C552.7 0 538.3 0 523.8 0C509.3 0 494.7 0 480 0C465.3 0 450.7 0 436.2 0C421.7 0 407.3 0 392.8 0C378.3 0 363.7 0 349 0C334.3 0 319.7 0 305.2 0C290.7 0 276.3 0 261.8 0C247.3 0 232.7 0 218.2 0C203.7 0 189.3 0 174.8 0C160.3 0 145.7 0 131 0C116.3 0 101.7 0 87.2 0C72.7 0 58.3 0 43.8 0C29.3 0 14.7 0 7.3 0L0 0Z"></path></svg>
        <!-- nav -->
           <nav class="sticky top-0 z-50 md:flex md:justify-between md:items-center bg-white py-3 mt-2 px-12 shadow-[0px_5px_5px_rgba(0,0,0,0.4)]">
               <div><i class="text-[#0b9b0b] fas fa-leaf fa-xl md:fa-2xl mr-1 md:mr-2"></i><a id="logo" ref="logo" class="pl-2 mr-2 font-bold uppercase text-[#0b9b0b]" href="/"></a></div>
               <button @click="showMenu = !showMenu" class="md:hidden absolute top-3 right-3 text-dark"><i class="fas fa-bars p-2 rounded hover:text-white hover:bg-gray-300"></i></button>
               <ul :class="{'hidden': !showMenu,'block':showMenu }" class="mt-2 md:mt-0 md:flex md:justify-evenly md:items-center space-x-0 space-y-1 md:space-y-0 md:space-x-4 lg:space-x-6">
                   <li class="hover:bg-[#00cba9] rounded-md text-[#0b9b0b] hover:text-[#fff] p-1 md:p-2"><a href="#">Home</a></li>
                   <li class="hover:bg-[#00cba9] rounded-md text-[#0b9b0b] hover:text-[#fff] p-1 md:p-2"><a href="#">About</a></li>
                   <li class="hover:bg-[#00cba9] rounded-md text-[#0b9b0b] hover:text-[#fff] p-1 md:p-2"><a href="#">products</a></li>
                   <li class="hover:bg-[#00cba9] rounded-md text-[#0b9b0b] hover:text-[#fff] p-1 md:p-2"><a href="#">Services</a></li>
                   <li class="hover:bg-[#00cba9] rounded-md text-[#0b9b0b] hover:text-[#fff] p-1 md:p-2"><a href="#">Customers</a></li>
                   <li class="hover:bg-[#00cba9] rounded-md text-[#0b9b0b] hover:text-[#fff] p-1 md:p-2"><a href="#">Contact</a></li>
               </ul>
           </nav>

</template>

<script setup>
import { ref } from 'vue';

let showMenu = ref(false);
let tahses = 'Tahses';
const logo = ref(null);
let index = 0;
const autoWrite = document.createElement('span');
function updater(){
        autoWrite.innerText = tahses.slice(0, index) + '_';
        logo.value.appendChild(autoWrite);
        index++;
        if (index > tahses.length) {
            index = 0;
        }
}
setInterval(updater,400);


</script>

<style scoped>

</style>
