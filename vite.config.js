import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		postcss: {
			plugins: [
				postCssPxToRem({
					/*
					  配置在将px转化为rem时 1rem等于多少px，
					  (因为我们搭配使用了amfe-flexible插件，此处我们需要设置的值应是UI设计稿全屏基准宽度的十分之一)
					  当UI设计稿的全屏基准宽度是1920px时 此处设置的值为192
					*/
					rootValue: 75,

					// propList - 配置方案1：所有px均转化为rem
					propList: ['*']

					/*
					  propList - 配置方案2：
						若想设置部分样式不转化 可以在propList中配置，如：除border和font-size外，所有px均转化为rem
						propList: ["*", "!border","!font-size"],
					*/
				})
			]
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
})
