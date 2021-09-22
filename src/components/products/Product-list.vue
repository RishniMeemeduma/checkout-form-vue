<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 mt-2" v-for="item in productItems" :key="item.id">
                <product-list-item :item="item"></product-list-item>
            </div>
        </div>
    </div>
</template>
<script>
import ProductListItem from '../products/Product-list-item.vue';
import { mapGetters } from 'vuex';

export default {
    data(){
        return{

        }
    },
    components:{
        ProductListItem
    },
    computed: {
        ...mapGetters('ProductList',['productItems'])
    },
    created(){
        this.$store.dispatch('ProductList/getProductItems');
    }
}
</script>