/*
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
import { svgBuilder } from './src/plugins/svgBuilder'; 

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    svgBuilder('./src/icons/svg/')
  ],
  
  resolve: {
    alias: {  // 路径别名定义
      '@': resolve(__dirname, './src'), // 设置 `@` 指向 `src` 目录
      'comps': resolve(__dirname,'src/components'),
      'apis': resolve(__dirname,'src/apis'),
      'views': resolve(__dirname,'src/views'),
      'utils': resolve(__dirname,'src/utils'),
      'styles': resolve(__dirname,'src/styles')
    }
  },
  // css: {},
  // esbuild: {},
  base: './', // 设置打包路径
  server: {
    port: 4500, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: '0.0.0.0',
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:x000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // },
  }
})