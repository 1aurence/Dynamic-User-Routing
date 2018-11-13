<template lang="html">
  <form>
<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input
  v-model="email"
  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input
  v-model="password"
  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>

<button
@click.prevent="signup"
 class="btn btn-primary">Create Account</button><br/>
<router-link to="/login">Login</router-link>

</form>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return {
      email:'',
      password: ''
    }
  },
  methods: {
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
        function(user){
          alert('account has been created')
        },
        function(err){
          alert('Oops', err.message)
        }
      )
    }
  }
}
</script>

<style lang="css">
form {
  width: 60%;
  margin: 0 auto;
}
</style>
