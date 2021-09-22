<template>
    <div class="form">
		<p>{{message}}</p>
		<form @submit.prevent="onSubmit" ref='form'>
			<input type="text" v-model.number="credit" placeholder="Card Number">
			<input type="text" v-model="username" placeholder="Card Holder">
			<input type="text" v-model.number="ccv" placeholder="CCV">
			<input type="text" v-model="address" placeholder="Shipping Address">
			<button v-on:click="toggleForm" class="cancel">X</button>
			<button type="submit" class="submit">Go</button>
		</form>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            message: '',
            credit: 0,
            username: '',
            address: '',
            ccv: '',
        }
    },
    computed:{
    },

    methods:{
        ...mapActions('Checkout',['toggleForm','add']),

        onSubmit(){
            let payload = {
                'name': this.username,
                'cardId': this.credit,
                'address': this.address,
                'ccv': this.ccv
            }

            if(!payload.cardId || !payload.ccv){
                this.message = 'Fill in all details';
                return ;
            }
            this.message = 'Checkout Successful';
            this.add(payload);

        }
    }
}
</script>
<style scoped>
.form {
	width: 50%;
    margin: 10px auto;
    background-color: burlywood;
	padding: 10px 0;
}

form input {
	display: block;
    margin: 5px auto;
    height: 20px;
    border: 1px solid #999;
}

form input:focus {
	outline-offset: unset;
	outline-color: #888;
    outline-style: solid;
}

.cancel, .submit {
	-webkit-appearance: none;
    background-color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
}

.cancel:focus, .submit:focus {
	outline-offset: unset;
    outline-style: solid;
}

.cancel {
    border: 2px solid #ec2c4396;
    color: #ec2c4396;
    margin-right: 5px;
}
.cancel:focus {
    outline-color: #ec2c4396;
}

.submit {
    border: 2px solid #41b883;
    color: #41b883;
}
.submit:focus {
    outline-color: #41b883;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #999;
  font-size: 12px;
  opacity: 1; /* Firefox */
}
</style>