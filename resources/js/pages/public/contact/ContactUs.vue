<template>
    <home-layout>
        <div class="flex flex-col justify-center items-center my-4 py-6 w-full">
            <h1 class="text-lg md:text-2xl lg:text-4xl p-2 tracking-wider font-sans font-normal md:font-light capitalize text-gray-600 flex justify-center flex-wrap w-full md:w-[60vw] text-center">You can either contact us through <strong class="mx-2">Email</strong> or fill in the <strong class="mx-2">form</strong></h1>
            <div class="grid grid-cols-3 w-full">
                <div class="col-span-3 md:col-span-2 pt-4 md:pt-16 px-8 md:px-16 w-full">
                    <div class="p-6 flex rounded-md w-full bg-gray-50">
                        <form @submit.prevent="submitForm" class="w-full">
                            <div class="relative z-0 mb-6 w-full group">
                                <input v-model="data.full_name" type="text" name="place" id="full_name" :class="{'border-red-600 focus:border-red-600': v$.full_name.$error}" class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                <label for="full_name" :class="{'text-red-600': v$.full_name.$error}" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">

                                <input v-model="data.email" type="email" name="my_email" :class="{'border-red-600 focus:border-red-600': v$.email.$error}" class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                <label :class="{'text-red-600': v$.email.$error}" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input v-model="data.phone" type="text" name="phone" id="phone" :class="{'border-red-600 focus:border-red-600': v$.phone.$error}" class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                <label for="phone" :class="{'text-red-600': v$.phone.$error}" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input v-model="data.place" type="text" name="place" id="place" :class="{'border-red-600 focus:border-red-600': v$.place.$error}" class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                <label for="place" :class="{'text-red-600': v$.place.$error}" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Place</label>
                            </div>
                            <label for="message" :class="{'text-red-600': v$.comment.$error}" class="block mb-2 text-md text-gray-500">Your message</label>
                            <textarea v-model="data.comment" id="message" rows="4" :class="{'border-red-600 focus:border-red-600': v$.comment.$error}" class="mb-4 block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" placeholder="Leave a comment..."></textarea>

                            <button type="submit" class="text-center text-white bg-primary/90 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                        </form>
                    </div>
                </div>
                <div class="col-span-3 md:col-span-1 pt-4 md:pt-12 px-8 md:px-4">
                    <div v-if="company" class="my-3 bg-primary p-3">
                        <p class="text-white text-base md:text-md lg:text-lg font-normal">Business Hour: <span class="text-white font-normal text-sm lg:text-md ml-2">Monday – Saturday: 8:30am to 5:30pm</span></p>
                        <p class="text-white text-base md:text-md lg:text-lg font-normal">Email: <span class="text-white font-normal text-sm lg:text-md ml-2">{{ company.email }}</span></p>
                        <p class="text-white text-base md:text-md lg:text-lg font-normal">Phone:<span class="text-white font-normal text-sm lg:text-md ml-2">{{company.phone}}</span></p>
                        <p class="text-white text-base md:text-md lg:text-lg font-normal">Location:<span class="text-white font-normal text-sm lg:text-md ml-2">{{company.location}}</span></p>
                    </div>
                    <div v-if="company" class="border border-2 border-primary bg-gray-100 flex justify-center">
                        <iframe :src="company.source_map" width="230" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import helpers from "@composable/helpers";
import usePublicContactUs from "@composable/public/public_contact_us";
import useCompanyInfo from "@composable/public/public_company_info";
import useVuelidate from "@vuelidate/core";
import { required,email } from '@vuelidate/validators';
import {computed, onMounted, reactive} from "vue";

const { company, fetchCompanyInfo } = useCompanyInfo();
const { constants } = helpers();
const { sendRequest } = usePublicContactUs();

const data = reactive({
    full_name: '',
    email: '',
    phone:'',
    place: '',
    comment: ''
});
const rules = computed(()=>{
    return {
        full_name:{required},
        email:{required, email},
        phone:{required},
        place:{required},
        comment:{required},
    }
});

const v$ = useVuelidate(rules,data);

const submitForm = async()=>{
    v$.value.$validate();
    if(!v$.value.$error) {
        await sendRequest(data);
        v$.value.$reset();
            data.full_name='';
            data.email='';
            data.phone='';
            data.place='';
            data.comment='';
        window.scrollTo(0, 0);
    }

}
onMounted(fetchCompanyInfo);

</script>

