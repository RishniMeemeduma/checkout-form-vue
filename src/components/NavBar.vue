<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Vuex</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <router-link :to="{name:'inventory'}"  class="btn btn-success btn-lg me-3">Products</router-link>
                <router-link :to="{name:'cart'}"  class="btn btn-warning btn-lg">Cart {{ cartQuantity }}</router-link>
               
            </ul>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters('CartItems',['cartQuantity']),
    },
    created(){
        this.$store.dispatch('CartItems/getCartItems');
    }
}
</script>