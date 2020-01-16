<template>
  <v-toolbar fixed class="deep-orange" dark>
    <v-toolbar-title class="mr-4 home">
      <router-link
        tag="span"
        :to="{name: 'songs'}"
      >Tab tracker  </router-link> 
    </v-toolbar-title>
      <v-toolbar-items>
        <v-btn
        :to="{name: 'songs'}" 
        flat>
          Browse
        </v-btn>
      </v-toolbar-items>
    <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
        v-show="!$store.state.isloggedIn"
        :to ="{name: 'register'}" 
        flat>
          Sign up
        </v-btn>
        <v-btn
        v-show="!$store.state.isloggedIn"
        :to="{name: 'login'}" 
        flat>
          Sign in
        </v-btn>
        <v-btn
        v-show="$store.state.isloggedIn"
        @click="logout" 
        flat>
          log out
        </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: 'header',
  methods:{
    logout(){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'songs'})
    }
  }
}
</script>
<style scoped>
  .home{
    cursor: pointer;
  }
</style>

