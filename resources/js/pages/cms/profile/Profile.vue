<template>
    <div class="mt-8">
        <h4 class="text-gray-600">Account settings</h4>

        <div class="mt-4">
            <div class="p-6 bg-white rounded-md shadow-md">
                <h2 class="text-lg text-gray-700 font-semibold capitalize">Change Password</h2>

                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

                        <div>
                            <label class="text-gray-700">Current Password</label>
                            <p v-if="v$.current_password.$error" class="text-red-600 text-sm py-1">
                                <span>{{ v$.current_password.$errors[0].$message }} </span>
                            </p>
                            <input v-model="data.current_password" :class="{'border border-red-600': v$.current_password.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="password">
                        </div>

                        <div>
                            <label class="text-gray-700">New Password</label>
                            <p v-if="v$.new_password.$error" class="text-red-600 text-sm py-1">
                                <span>{{ v$.new_password.$errors[0].$message }} </span>
                            </p>
                            <input v-model="data.new_password" :class="{'border border-red-600': v$.new_password.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="password">
                        </div>

                        <div>
                            <label class="text-gray-700">Password Confirmation</label>
                            <p v-if="v$.confirm_password.$error" class="text-red-600 text-sm py-1">
                                <span>{{ v$.confirm_password.$errors[0].$message }} </span>
                            </p>
                            <input v-model="data.confirm_password" :class="{'border border-red-600': v$.confirm_password.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="password">
                        </div>
                    </div>

                    <div class="flex justify-end mt-4">
                        <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required,sameAs } from '@vuelidate/validators';
import {computed, reactive} from "vue";
import useProfile from "@composable/profile";

const { changePassword } = useProfile();

const data = reactive({
    current_password: '',
    new_password: '',
    confirm_password: '',
});

const rules = computed(()=>{
    return{
        current_password:{required},
        new_password:{required},
        confirm_password:{required, sameAs: sameAs(data.new_password)},
    }
})

const v$ = useVuelidate(rules,data);

const submitForm = async () =>{
    await v$.value.$validate();
    if(!v$.value.$error) {
        await changePassword(data);
    }
}
</script>
