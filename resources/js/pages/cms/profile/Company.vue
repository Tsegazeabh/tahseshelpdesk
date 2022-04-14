<template>
    <div class="mt-8">
        <h4 class="text-gray-600">Company settings</h4>

        <div v-if="company" class="mt-4">
            <div class="p-6 bg-white rounded-md shadow-md">
                <h2 class="text-lg text-gray-700 font-semibold capitalize">Company Information Details</h2>
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

                        <div>
                            <label class="text-gray-700">Company Name</label>
                            <p v-if="v$.title.$error" class="text-red-600 text-sm py-1">
                                <span>{{ v$.title.$errors[0].$message }} </span>
                            </p>
                            <input v-model="company.title" :class="{'border border-red-600': v$.title.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text">
                        </div>

                        <div>
                            <label class="text-gray-700">Company Location</label>
                            <p v-if="v$.location.$error" class="text-red-600 text-sm py-1">
                                <span>{{ v$.location.$errors[0].$message }} </span>
                            </p>
                            <input v-model="company.location" :class="{'border border-red-600': v$.location.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text">
                        </div>

                        <div>
                            <label class="text-gray-700">Company Phone Number</label>
                            <p v-if="v$.phone.$error" class="text-red-600 text-sm py-1">
                                <span>{{ v$.phone.$errors[0].$message }} </span>
                            </p>
                            <input v-model="company.phone" :class="{'border border-red-600': v$.phone.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text">
                        </div>

                        <div>
                            <label class="text-gray-700">Company Email</label>
                            <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                                <span>{{ v$.email.$errors[0].$message }} </span>
                            </p>
                            <input v-model="company.email" :class="{'border border-red-600': v$.email.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="email">
                        </div>

                        <div>
                            <label class="text-gray-700">Company Summary</label>
                            <p v-if="v$.description.$error" class="text-red-600 text-sm py-1">
                                <span>{{ v$.description.$errors[0].$message }} </span>
                            </p>
                            <textarea v-model="company.description" :class="{'border border-red-600': v$.description.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" />
                        </div>

                    </div>

                    <div class="flex justify-end mt-4">
                        <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-else><p class="px-2 text-pink-400">please seed the default company information to continue:(</p></div>
    </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, email } from '@vuelidate/validators';
import {computed, onMounted} from "vue";
import useProfile from "@composable/profile";

const { company, saveCompanyInfo, fetchCompanyInfo } = useProfile();

const rules = computed(()=>{
    return{
        location:{required},
        email:{required, email},
        phone:{required},
        title:{required},
        description:{required},
    }
})

const v$ = useVuelidate(rules,company);

const submitForm = async () =>{
    await v$.value.$validate();
    if(!v$.value.$error) {
        await saveCompanyInfo();
        await fetchCompanyInfo();
    }
}

onMounted(()=>{
    fetchCompanyInfo();
});
</script>
