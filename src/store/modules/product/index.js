import axios from 'axios';

const state = {
    productItems : [],
}

const mutations = {
    UPDATE_PRODUCT_ITEMS (state,payload) {
        state.productItems = payload;
    }
}

const actions = {

    getProductItems({commit}) {
        axios.get(`/api/products`)
        .then(({data}) => {
            commit('UPDATE_PRODUCT_ITEMS',data);
        });
    },

}

// getters return store states methods
const getters = {
    productItems: (state) => state.productItems
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}