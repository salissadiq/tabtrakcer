<template>
<v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
          <div>
              <v-text-field
            v-model="email"
            label="Enter email"
        />
        <v-text-field 
            label="Enter password"
            type="password"
            v-model="password"/>
        <v-btn class="deep-orange" dark @click="login">Login</v-btn><br>
        <div class="error" v-html="error" />
          </div>
      </panel>
    </v-flex>
</v-layout>
</template>
<script>
import Auth from '@/services/Auth'
    export default {
  name: 'register',
  data(){
      return {
          email: '',
          password: '',
          error: null,
      }
  },
  methods:{
      async login() {
        try {
             const resp =  await Auth.login({
              email: this.email,
              password: this.password
          })
          this.$store.dispatch('setToken', resp.data.token)
          this.$store.dispatch('setUser', resp.data.user)
          this.$router.push({name: 'songs'})
        } catch (err) {
            this.error = err.response.data
            console.log(this.error)
        }

      }
  }
}
</script>
<style>
    .error{
        color: white;
    }
</style>

