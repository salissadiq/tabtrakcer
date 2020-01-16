<template>
    <v-layout >
        <v-flex xs6 v-show="isloggedIn">
            <songs-bookmarks/>
            <songs-history class="mt-2"/>
        </v-flex>
        <v-flex :class="{
            xs12: !isloggedIn,
            xs6: isloggedIn
        }" class="ml-2">
            <song-search-panel/>
            <song-panel class="mt-2"/>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import Songs from '@/services/Songs'
import SongPanel from './SongPanel'
import SongSearchPanel from './SongSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import SongsHistory from './SongsHistory'
export default {
    data() {
        return{
            songs: null
        }
    },
    components:{
        SongPanel,
        SongSearchPanel,
        SongsBookmarks,
        SongsHistory
    },
    methods:{
 
    },
    async mounted(){
        this.songs = (await Songs.index()).data      
    },
    computed:{
        ...mapState(['isloggedIn', 'user'])
    }

}
</script>

<style>
    .song{
        height: 330px;
        padding: 20px;
        overflow: hidden;
    }
    .song_title{
        font-size: 30px;
    }
    .song_artist{
        font-size: 24;
    }
    .song_album{
        font-size: 18px;
    }
    .albumImg{
        width: 70%;
        margin: 0 auto;
    }
</style>
