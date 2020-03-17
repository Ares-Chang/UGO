// 封装 request 函数
export default function(obj) {
	const { baseUrl } = obj

	return function(vue) {
		vue.prototype.request = async function(opts) {
			const { url } = opts

			const [err,res] = await uni.request({
				url: baseUrl + url
			})

			return res.data
		}
	}
}