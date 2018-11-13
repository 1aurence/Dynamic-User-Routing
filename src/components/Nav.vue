<template lang="html">
  <div class="">
    <ul class="nav nav-tabs mx-5">
  <li class="nav-item" v-if="!loggedIn">
    <router-link to="/login"class="nav-link active" href="#">Login</router-link >
  </li>
  <li class="nav-item" v-if="!loggedIn">
    <router-link to="/signup"class="nav-link active" href="#">Sign Up</router-link >
  </li>
  <li class="nav-item" v-if="loggedIn">
    <router-link to="/dashboard"class="nav-link active" href="#">Dashboard</router-link >
  </li>
  <li class="nav-item ml-auto" v-if="loggedIn">
      <a @click.prevent="logout" class="nav-link active" href="#">Logout</a>
    </li>

</ul>
  </div>
</template>

<script>
import { bus } from '../main';

export default {
  data(){
    return {
      loggedIn: false
    }
  },
  created(){
    bus.$on('logged-in', this.loggedIn = true)

  },
  methods: {
    logout(){

      this.loggedIn = false
      this.$router.push('/')
    }
  },
  beforeDestroy: {
    alert('bye')
  }
}
</script>

<style lang="css">
</style>
