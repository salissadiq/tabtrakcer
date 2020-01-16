<template>
            <panel title="Songs">
             
                   <v-btn 
                        slot="action"
                        class="deep-orange accent-2"
                        light
                        fab
                        absolute
                        middle
                        medium
                        right
                        @click="navigateTo({name: 'createSong'})"
                    >
                <v-icon> add </v-icon>
            </v-btn>
                <div class="song" v-for="song in songs" :key="song._id">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song_title">{{song.title}}</div>
                            <div class="song_artist">{{song.artist}}</div>
                            <div class="song_album">{{song.album}}</div>
                            <v-btn class="deep-orange" 
                                flat
                                dark
                                :to="{name: 'song', params:{songId: song._id}}"
                            >View</v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <img class="albumImg" src="@/assets/album.jpg"/>
                        </v-flex>
                    </v-layout>
                    
                </div>
            </panel>
</template>

<script>
import Songs from '@/services/Songs'
export default {
    data() {
        return{
            songs: null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    watch:{
        '$route.query.search': {
            immediate: true,
            async handler(value) {
                this.songs = (await Songs.index(value)).data
            }
        }
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
