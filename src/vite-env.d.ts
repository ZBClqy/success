/// <reference types="vite/client" />
declare module '*.vue' {
    import { DefineComponent, readonly } from 'vue'
    const component:DefineComponent<object,object,any>
    export default component
}

interface ImportMetaEnv{
    readonly TT_TEST : string
}