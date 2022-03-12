<template>
    dashboard coming soon...
    <p>{{ isAuthenticated }}</p>
    <p>{{ token }}</p>
    <p>{{ user }}</p>
    <button @click="logout">Logout</button>
</template>

<script setup>
import {ref, onMounted, reactive} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

let isAuthenticated = ref(false);
let token = ref('');
isAuthenticated = store.getters['isLoggedIn'];
token = store.getters['getToken'];
let user = reactive({})
user = store.getters['getUser'];
function logout(){
    store.dispatch('logout');
}

</script>

<style scoped>

</style>
