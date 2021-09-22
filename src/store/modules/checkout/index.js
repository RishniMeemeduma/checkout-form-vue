const state = {
    FormData: [],
    formOpen: false,
}

const mutations = {
    FORM_DATA (state,payload) {
        state.FormData = payload
    },
    FORM_OPEN_STATUS (state) {
        state.formOpen = !state.formOpen
    }
}

const actions = {
    toggleForm({commit}){
        commit('FORM_OPEN_STATUS');
    },
    add({commit}, data){
        commit('FORM_DATA',data);
    }
}

const getters= {
    formOpen: (state) => state.formOpen
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters

}