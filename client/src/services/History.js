import Api from './Api'

export default {
    index(params) {
        return Api().get('histories', {params: params})
    },

    post(data) {
        return Api().post('histories', data)
    }
}