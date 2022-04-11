<template>
    <section class="flex justify-center items-center h-screen bg-gray-100">
        <notifications position="top center" class="mt-10"/>
        <form @submit.prevent="resetPassword" class="max-w-md w-full bg-white rounded p-6 space-y-4">
            <div class="mb-4">
                <p class="text-gray-600">Create New Password</p>
                <h2 class="text-xl font-bold">Tahses CMS</h2>
            </div>
            <div>
                <p v-if="v$.password.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.password.$errors[0].$message }} </span>
                </p>
                <input v-model="user.password" type="password" :class="{'border border-red-600': v$.password.$error}" class="w-full p-4 text-sm bg-gray-50 focus:outline-primary focus:border-primary focus:outline-offset-0 border border-gray-200 rounded text-gray-600" placeholder="New Password">
            </div>
            <div>
                <p v-if="v$.confirmPassword.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.confirmPassword.$errors[0].$message }} </span>
                </p>
                <input v-model="user.confirmPassword" type="password" :class="{'border border-red-600': v$.confirmPassword.$error}" class="w-full p-4 text-sm bg-gray-50 focus:outline-primary focus:border-primary focus:outline-offset-0 border border-gray-200 rounded text-gray-600" placeholder="Confirm Password">
            </div>
            <div>
                <button type="submit" class="w-full py-4 bg-primary hover:bg-[#56af5D] rounded text-sm font-bold text-gray-50 transition duration-200">Reset</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import {computed, reactive} from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    import useVuelidate from '@vuelidate/core';
    import { required, sameAs } from '@vuelidate/validators';

    const props = defineProps(['token']);
    const store = useStore();
    const route = useRoute();
    const user = reactive({
        password:'',
        confirmPassword:''
    });

const rules = computed(()=>{
    return {
        password: { required },
        confirmPassword:{required, sameAs: sameAs(user.password)}
    }
});

const v$ = useVuelidate(rules,user);

    const resetPassword = async()=>{
        await v$.value.$validate();
        if(!v$.value.$error) {
            const payload = reactive({});
            payload.password = user.password;
            payload.token = props.token;
            payload.email = route.query.email;
                await store.dispatch('resetPassword', payload);
        }
    }

</script>

<style scoped>

</style>
