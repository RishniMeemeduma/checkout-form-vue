<template>
    <div class="card" style="width: 18rem;">
        <a class="btn btn-primary" @click="addtoCart(item)">
            <span>Add to Cart</span>
        </a>
        <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <!-- <a href="#" class="btn btn-primary"></a> -->
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props:['item'],
    methods:{
        ...mapActions('CartItems',['addtoCart'])

    }
}
</script>