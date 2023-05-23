import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {fileURLToPath, URL} from 'node:url'
// https://vitejs.dev/config/
export default defineConfig(()=>{
    return {
        envPrefix:'TT',
        resolve:{
            alias:{
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        //配置element-plus的自定义主题
        css:{
            preprocessorOptions:{
                scss:{
                    additionalData:'@use "@/styles/index.scss" as *;'
                }
            }
        },
        //配置element-plus的按需引入
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver({
                    importStyle:'sass'
                })],
            }),
            Components({
                resolvers: [ElementPlusResolver({
                    importStyle:'sass'
                })],
            }),

        ],
        //打包的相关优化配置
        build:{
            rollupOptions:{
                output:{
                    //配置js和css文件夹分离
                    chunkFileNames:'static/js/[name]-[hash].js',
                    entryFileNames:'static/js/[name]-[hash].js',
                    assetFileNames:'static/[ext]/[name]-[hash].[ext]',
                    //打包时的分包优化
                    manualChunks:{
                        vue:['vue','pinia','vue-router'],
                        elementIcons:['@element-plus/icons-vue']
                    }
                }
            }
        },
        server:{
            host: '0.0.0.0',
            port:8080,
            open:true,
            https:false,
            proxy:{
                '/api':{
                    target:'http://127.0.0.1:4000',
                    changeOrigin:true,
                    rewrite:(path:string)=>path.replace(/^\/api/,'')
                }
            }
        }
    }
})
