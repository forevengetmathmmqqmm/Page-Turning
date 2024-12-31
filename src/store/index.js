import { defineStore } from "pinia";


export const commnetStore = defineStore('comment', {
    state: () => {
        return {
            token: ''
        }
    },
    actions: {
        async getToken(val) {
            this.token = val
        }
    }
})