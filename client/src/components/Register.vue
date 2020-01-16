<template>
<v-layout>
    <v-flex xs6 offset-xs3>
        <panel title="Register">
            <v-text-field
            v-model="email"
            label="Enter email"
        />
        <v-text-field 
            label="Enter password"
            type="password"
            v-model="password"/>
        <v-btn class="deep-orange" dark @click="register">Register</v-btn><br>
        <div class="error" v-html="error" />
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
      async register() {
        try {
              const resp = await Auth.register({
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
        color: whiteamber;
    }
</style>

