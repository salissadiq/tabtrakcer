<template>
    <panel title="Songs Bookmarks">
        <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="bookmarks">
        <template slot="items" slot-scope="props">
            <td class="text-xs-left">
                {{props.item.songId.title}}
            </td>
            <td class="text-xs-left">
                {{props.item.songId.artist}}
            </td>
        </template>
        </v-data-table>
    </panel>
</template>

<script>
import Bookmark from '@/services/Bookmark'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            headers:[
                {
                    text: 'Title',
                    value: 'title'
                },
                {
                    text: 'Artist',
                    value: 'artist'
                }
            ],
            pagination: {
                sortBy: 'date',
                descending: true
            },
            bookmarks:[]
        }
    },

     computed:{
        ...mapState(['isloggedIn', 'user'])
    },
    async mounted(){
        if(this.isloggedIn) {
            try {
            this.bookmarks = (await Bookmark.index({userId: this.user._id})).data
            } catch (ex) {
            console.log(ex)
            }
        }
    }
}
</script>

<style>

</style>
