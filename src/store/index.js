import { defineStore } from 'pinia'

export const useStore = defineStore('main',{
    state () {
        return {
            count:0
        }
    },
    actions:{
        addCount () {
            this.count++
        }
    },
    getters:{
        doubleCount () {
            return this.count * 2
        }
    }
})