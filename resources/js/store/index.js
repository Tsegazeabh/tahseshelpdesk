import {createStore} from "vuex";
import mutations from './mutaions';
import getters from './getters';
import actions from './actions';

const store = createStore({
    state() {
        return{
            isAuthenticated: false,
            authToken: '',
        }
    },
    mutations,
    getters,
    actions
});
export default store;
