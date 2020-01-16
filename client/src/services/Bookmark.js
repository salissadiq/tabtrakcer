import Api from './Api'

export default {
    index(params) {
        return Api().get('bookmarks', {params:params})
    },
    post(data) {
        return Api().post('bookmarks', data)
    },
    delete(id) {
        return Api().delete(`bookmarks/${id}`)
    }
}