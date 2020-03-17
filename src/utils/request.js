// 封装 request 函数
export default function(obj) {
	const { baseUrl } = obj

	return function(vue) {
		vue.prototype.request = async function(opts) {
			const { url } = opts

			// 添加 loading
			uni.showLoading({
				title: '数据加载中...'
			})
			// 设置请求
			const [err,res] = await uni.request({
				url: baseUrl + url
			})

			// 关闭loading
			uni.hideLoading()

			return res.data
		}
	}
}