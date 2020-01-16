<template>
    <panel title="Recently Viewed songs">
        <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="histories">
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
import History from '@/services/History'
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
            histories:[]
        }
    },

     computed:{
        ...mapState(['isloggedIn', 'user'])
    },
    async mounted(){
        if(this.isloggedIn) {
            try {
            this.histories = (await History.index({userId: this.user._id})).data
            console.log(this.user._id)
            } catch (ex) {
            console.log(ex)
            }
        }
    }
}
</script>

<style>

</style>
