import Api from '@/services/Api'

export default{
    index(search) {
        return Api().get('songs', { params:{
            search: search
        }})
    },
    show(songId) {
        return Api().get(`songs/${songId}`)
    },
    create(song_data) {
        return Api().post('songs', song_data)
    },
    editSong(song) {
        return Api().put(`songs/${song._id}`, song)
    }
}