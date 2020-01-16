<template>
    <v-layout row>
        <v-flex xs4>
            <panel title="Create Song">
                <div>
                    <v-text-field
                        v-model="song.title"
                        label="Title"
                        :rules="[required]"
                    />
                    <v-text-field
                        v-model="song.artist"
                        label="Artist"
                        :rules="[required]"
                    />
                    <v-text-field
                        v-model="song.genre"
                        label="Genre"
                        :rules="[required]"
                    />
                    <v-text-field
                        v-model="song.album"
                        label=" Album"
                        :rules="[required]"
                    />
                    <v-text-field
                        v-model="song.albumImage"
                        label="Album image URL"
                        :rules="[required]"
                    />
                    <v-text-field
                        v-model="song.youtubeId"
                        label="YoutubeId"
                        :rules="[required]"
                    />
                </div>
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Song Metadata" class="ml-2">
                <div>
                    <v-textarea
                        v-model="song.lyrics"
                        label="Lyrics"
                        :rules="[required]"
                        
                    />
                    <v-textarea
                        v-model="song.tab"
                        label="Tab"
                        multi-line
                        :rules="[required]"
                    />
                </div>
                <div class="danger-alert" v-show="error">{{error}}</div>
            </panel>
                <v-btn class="deep-orange" dark @click="createSong">Create Song</v-btn>
                
        </v-flex>
    </v-layout>
</template>

<script>
import Song from '@/services/Songs'
export default {
    data(){
        return{
          song: {
            title: null,
            artist: null,
            genre: null,
            album: null,
            albumImage: null,
            youtubeId: null,
            lyrics: null,
            tab: null
            },
        required: (value) => !!value || 'Required.',
        error: null
        }
    },
    methods:{
        async createSong(){
            this.error = null
            const allsongField = Object
                .keys(this.song)
                .every(key => !!this.song[key])
                if(!allsongField) {
                    this.error = 'Please fill in all the required fields'
                } else{
            try {
                 await Song.create(this.song)
                 this.$router.push({name: 'songs'})
                console.log(this.song)
            } catch (ex) {
                console.log(ex)
            }
                }
        }
    }
}
</script>

<style>
    .danger-alert{
        color: red;
    }
</style>
