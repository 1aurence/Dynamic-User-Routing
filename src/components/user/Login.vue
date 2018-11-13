<template lang="html">
  <div class="">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
    v-model="email"
    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input
    v-model="password"
     type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

  <button
  @click.prevent="login"
   class="btn btn-primary">Login</button><br/>
  <router-link to="/signup">Sign up</router-link>
</form>
  </div>
</template>

<script>
import { bus } from '../../main';

import firebase from 'firebase'

export default {
  data(){
    return {
      email:'',
      password: ''
    }
  },
  mounted: function() {
    console.log({router: this.$router});
  },

  methods: {
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
        (user) =>{
          if(user) {
            bus.$emit('logged-in')
            this.$router.push("/dashboard")

          } else{
           alert('user not found')
         }
        }
      )
    }
  }
}
</script>

<style lang="css">
</style>
