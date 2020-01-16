<template>
    <v-layout row>
        <v-flex xs4>
            <panel title="Edit Song">
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
                <v-btn class="deep-orange" dark @click="editSong">Edit Song</v-btn>
                
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
        async editSong(){
            const songId = this.$store.state.route.params.songId
          try {
            await Song.editSong(this.song)
            this.$router.push({name: 'song', params:{songId: songId}})
          } catch (ex) {
              console.log(ex)
          }
        }
    },
    async mounted(){
		const songId = this.$store.state.route.params.songId
		try {
			this.song = (await Song.show(songId)).data
		} catch (ex) {
			console.log(ex)
		}
	}
}
</script>

<style>
    .danger-alert{
        color: red;
    }
</style>
