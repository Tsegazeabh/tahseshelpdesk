<template>
    <section class="flex justify-center items-center h-screen bg-gray-100">
        <notifications position="top center" class="mt-10"/>
        <form @submit.prevent="login" class="max-w-md w-full bg-white rounded p-6 space-y-4">
            <div class="mb-4">
                <p class="text-gray-600">Sign In</p>
                <h2 class="text-xl font-bold">Tahses CMS</h2>
            </div>
            <div>
                <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.email.$errors[0].$message }} </span>
                </p>
                <input v-model="user.email" type="email" :class="{'border border-red-600': v$.email.$error}" class="w-full p-4 text-sm bg-gray-50 focus:outline-primary focus:border-primary focus:outline-offset-0 border border-gray-200 rounded text-gray-600" placeholder="Email">
            </div>
            <div>
                <p v-if="v$.password.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.password.$errors[0].$message }} </span>
                </p>
                <input v-model="user.password" type="password" :class="{'border border-red-600': v$.password.$error}" class="w-full p-4 text-sm bg-gray-50 focus:outline-primary focus:border-primary focus:outline-offset-0 border border-gray-200 rounded text-gray-600" placeholder="Password">
            </div>
            <div>
                <button type="submit" class="w-full py-4 bg-primary hover:bg-[#56af5D] rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex flex-row items-center">
                    <input type="checkbox" class="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" id="comments">
                    <label for="comments" class="ml-2 text-sm font-normal text-gray-600">Remember me</label>
                </div>
                <div>
                    <router-link class="text-sm text-primary hover:underline" :to="{name:'forgot_password'}">Forgot password?</router-link>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import {computed, reactive} from 'vue';
    import { useStore } from 'vuex';
    import useVuelidate from '@vuelidate/core';
    import { required, email } from '@vuelidate/validators';
import {notify} from "@kyvg/vue3-notification";

    const store = useStore();
    const user = reactive({email:'',password:''});

const rules = computed(()=>{
    return {
        email:{required, email},
        password:{required}
    }
});

const v$ = useVuelidate(rules,user);

    const login = async()=>{
        v$.value.$validate();
        if(!v$.value.$error) {
                await store.dispatch('login', user);
        }
    }

</script>

<style scoped>

</style>
