import axios from 'axios';

const state = {
    cartItems : []
}

const mutations = {
    UPDATE_CART_ITEMS (state,payload){
        state.cartItems = payload
    }
}

const actions= {
    getCartItems({commit}){
        axios.get(`/api/cart`)
        .then(({data}) => {
            commit('UPDATE_CART_ITEMS',data);
        })
    },
    addtoCart({commit}, item){
        axios.post(`/api/cart`,item)
        .then(({data}) => {
            commit('UPDATE_CART_ITEMS',data);
        })
    },
    removeAllCartItems({commit}){
        axios.delete(`/api/cart/delete/all`)
        .then(({data}) => {
            commit('UPDATE_CART_ITEMS',data);
        })
    },
    removeCartItem({commit},item) {
        axios.delete(`/api/cart/delete`,item)
        .then(({data}) => {
            commit('UPDATE_CART_ITEMS',data);
        })
    }
}

const getters = {
    cartQuantity: (state) => {
        return state.cartItems.reduce((count,item) => {
            return item.quantity + count
        }, 0);
    },
    cartItems: (state) => state.cartItems,
    cartTotal:(state) => {
        return state.cartItems.reduce((acc,item) => {
            return item.quantity * item.price + acc 
        }, 0)
        .toFixed(2);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}