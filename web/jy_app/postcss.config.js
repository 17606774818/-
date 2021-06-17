module.exports = {
  plugins: {
    autoprefixer: {},
		"postcss-px-to-viewport":{
			viewportWidth:375,//视窗的宽度 对应的是我们设计稿的宽度
			viewportHeight:667,//视窗的高度，对应的是我们设计稿的高度
			unitPrecision:4,//指定'px'转换视窗单位的小数位数
			viewportUnit:'vw',//指定需要转换成的视窗单位 建议使用vw
			selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的class类
			minPixelValue:1,//小于这个单位不转换
			mediaQuery:false//允许媒体查询中转换'px'

		}
  }
}
