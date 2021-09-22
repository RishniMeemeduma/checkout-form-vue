<template>
    <div class="front-page">
    
        <h1> Checkout Form </h1>

        <div class="card">
        <p>Total : <b>{{ cartTotal }}$</b></p>
        <button @click.prevent="toggleForm">
            CHECKOUT
            <i class="fa fa-shopping-cart"></i>
        </button>
        </div>
        <Form v-if="formOpen" />
  </div>
</template>
<script>
import Form from '../checkout/form.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components:{
        Form
    },
    data(){
        return {
        }
    },
    computed:{
        ...mapGetters('CartItems',['cartTotal']),
        ...mapGetters('Checkout',['formOpen']),       
    },
    methods:{
        ...mapActions('Checkout',['toggleForm'])
    }
}
</script>