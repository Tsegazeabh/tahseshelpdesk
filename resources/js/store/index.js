import {createStore} from "vuex";
import mutations from './mutaions';
import getters from './getters';
import actions from './actions';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state() {
        return{
            user: {},
            isAuthenticated: false,
            authToken: ''
        }
    },
    mutations,
    getters,
    actions,
    plugins: [createPersistedState()],
    // config.headers["Authorization"] = 'Bearer ' + token;
});
export default store;
