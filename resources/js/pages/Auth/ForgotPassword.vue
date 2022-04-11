<template>
    <section class="flex justify-center items-center h-screen bg-gray-100">
        <form @submit.prevent="forgotPassword" class="max-w-md w-full bg-white rounded p-6 space-y-4">
            <div class="mb-4">
                <p class="text-gray-600">Forgot Password</p>
                <h2 class="text-xl font-bold">Tahses CMS</h2>
            </div>
            <div>
                <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.email.$errors[0].$message }} </span>
                </p>
                <input v-model="email_address.email" type="email" :class="{'border border-red-600': v$.email.$error}" class="w-full p-4 text-sm bg-gray-50 focus:outline-primary focus:border-primary focus:outline-offset-0 border border-gray-200 rounded text-gray-600" placeholder="Email">
            </div>
            <div>
                <button type="submit" class="w-full py-4 bg-primary hover:bg-[#56af5D] rounded text-sm font-bold text-gray-50 transition duration-200">Send Password Reset Link</button>
            </div>
            <div class="flex items-center justify-end">
                <div>
                    <router-link class="text-sm text-primary hover:underline" :to="{name:'login'}">Login</router-link>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { computed, reactive } from 'vue';
    import { useStore } from 'vuex';
    import useVuelidate from '@vuelidate/core';
    import { required, email } from '@vuelidate/validators';

    const store = useStore();
    const email_address = reactive({email:''});

    const rules = computed(()=>{
        return {
            email: {required, email}
        }
    });
    const v$ = useVuelidate(rules,email_address);

    function forgotPassword(){
        v$.value.$validate();
        if(!v$.value.$error) {
            store.dispatch('forgotPassword', email_address);
        }
    }

</script>

<style scoped>

</style>
