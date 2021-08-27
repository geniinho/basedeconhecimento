import Vue from 'vue'


export const userKey = '__knowledge_user'
export const baseApiUrl = 'http://localhost:3000'
//export const baseApiUrl = 'http://189.89.155.137:3000'
//export const baseApiUrl = 'https://b901a4cc771a.ngrok.io'

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }