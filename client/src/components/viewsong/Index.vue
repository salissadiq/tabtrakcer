<template>
<div>
	<v-layout>
		<v-flex xs6>
  			<song-metadata :song="song"/>
		</v-flex>
		<v-flex xs6 class="ml-2">
  			<you-tube :youtubeId="song.youtubeId"/>
		</v-flex>
	</v-layout>
	<v-layout class="mt-2">
		<v-flex xs6>
			<song-lyrics :lyrics="song.lyrics"/>
		</v-flex>
		<v-flex xs6 class=" ml-2">
			<song-tab :lyrics="song.tab"/>
		</v-flex>
	</v-layout>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Song from '@/services/Songs'
import SongMetadata from './SongMetadata'
import YouTube from './Youtube'
import SongLyrics from './SongLyrics'
import SongTab from './SongTab'
import History from '@/services/History'
export default {
	data(){
		return{
			song: {}
		}
	},
	components:{
		SongMetadata,
		YouTube,
		SongLyrics,
		SongTab
	},
	     computed:{
        ...mapState(['isloggedIn', 'user'])
    },
	async mounted(){
		const songId = this.$store.state.route.params.songId
		try {
			if(this.isloggedIn){
			await History.post({songId: songId, userId: this.user._id})
			}
			this.song = (await Song.show(songId)).data
		} catch (ex) {
			console.log(ex)
		}
	}
}
</script>

<style>

</style>
