<template>
     <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
        <cart-item-list :cartItem="cartItem"></cart-item-list>
      </li>
      <div class="notification is-success">
        <button class="delete"></button>
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
    </ul>
    <div class="buttons">
      <router-link :to="{name:'checkout'}" :disabled="!cartItems.length" tag="button" class="button is-info">
        Checkout (
        <span class="has-text-weight-bold">{{ cartTotal }}</span>
        )
      </router-link>

      <button class="button is-danger is-outlined" @click="removeAllCartItems">
        <span>Delete All Items</span>
        <span class="icon is-small">
          <i class="fas fa-items"></i>
        </span>
      </button>
    </div>
  </div>
</template>
<script>
import CartItemList from '../cart/Cart-item-list.vue';

import { mapGetters, mapActions } from 'vuex';
export default {
    components:{
        CartItemList
    },
    computed:{
        ...mapGetters('CartItems',['cartItems','cartQuantity','cartTotal'])
    },
    methods:{
        ...mapActions('CartItems',['removeAllCartItems'])
    }
}
</script>