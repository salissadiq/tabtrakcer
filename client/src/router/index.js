import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/Register'
import Login from '@/components/login'
import Songs from '@/components/Songs/Index'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/viewsong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
     {
       path: '/songs',
       name: 'songs',
       component: Songs
     },
     {
       path: '/songs/create_song',
       name: 'createSong',
       component: CreateSong
     },
     {
       path: '/songs/:songId',
       name: 'song',
       component: ViewSong
     },
     {
       path: 'songs/:songId/edit',
       name: 'edit_song',
       component: EditSong
     },{
       path: '*',
       redirect: 'songs'
     }
  ]
})
