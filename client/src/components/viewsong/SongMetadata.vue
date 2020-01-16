<template>
    <panel title="Song Metadata">
        <v-layout>
            <v-flex xs6>
                <div class="song_title">{{song.title}}</div>
                   <div class="song_artist">{{song.artist}}</div>
                        <div class="song_album">{{song.genre}}</div>
                        <v-btn class="deep-orange" 
                                v-show="isloggedIn && !bookmark"
                                flat
                                dark
                                :to="{name: 'edit_song', params:{songId: song._id}}"
                            >Edit</v-btn>
                              <v-btn class="deep-orange" 
                                v-show="isloggedIn && !bookmark"
                                flat
                                dark
                                @click="bookmarkSong"
                            >Bookmark</v-btn>
                              <v-btn class="deep-orange" 
                                v-show="isloggedIn && bookmark"
                                flat
                                dark
                                @click="unbookmark"
                            >Unbookmark</v-btn>
            </v-flex>
           <v-flex xs6>
                <img class="albumImg" src="../../assets/album.jpg"/>
                <div class="song_album">{{song.album}}</div>
            </v-flex>
       </v-layout>
    </panel>    
</template>

<script>
import Bookmark from '@/services/Bookmark'
import {mapState} from 'vuex'
export default {
    props:['song'],
    data(){
        return{
            bookmark: null,
            bookmarks: []
        }
    },
    computed:{
        ...mapState(['isloggedIn', 'user'])
    },
    watch:{
        async song(){
            if(!this.isloggedIn) return
            try {
                const bookmarks = (await Bookmark.index({songId: this.song._id, userId: this.user._id})).data
                if(bookmarks.length){
                this.bookmark =  bookmarks[0]
                }
            } catch (ex) {
                console.log(ex)
            }
        }
    },
    methods:{
        async bookmarkSong(){
            try {
                await Bookmark.post({
                    songId: this.song._id,
                    userId: this.user._id
                })
                const bookmarks = (await Bookmark.index({songId: this.song._id, userId: this.user._id})).data
                if(bookmarks.length){
                    this.bookmark = bookmarks[0]
                }
            } catch (ex) {
                console.log(ex)
            }
        },
        async unbookmark(){
            await Bookmark.delete(this.bookmark._id)
            this.bookmark = null
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
