<template>
	<div class="wrapper">
		<image :src="logo" class="logo" />
		<text>{{bundleUrl}}</text>
		<text class="greeting">suigang demo</text>
		<HelloWorld/>
		<text>{{result}}</text>
		<div @click='goLogin' class="gologin">
			<text class="logintext">跳转登录页</text>
		</div>
	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld';
	import util from "@/util/util.js";
	const storage = weex.requireModule('storage')
	export default {
		name: 'App',
		components: {
			HelloWorld
		},
		data() {
			return {
				logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
				bundleUrl: "",
				result: ""
			}
		},
		mounted() {
			console.log(weex, 'weex')
			let bundleUrl = weex.config.bundleUrl;
			this.bundleUrl = bundleUrl;
			console.log(bundleUrl, 'bundleUrl')
			let arrNew = bundleUrl.split("/");
			console.log(arrNew, 'arr')
			bundleUrl = arrNew.splice(2, 1);
			let http = arrNew.splice(0, 1);
			bundleUrl = bundleUrl[0];
			console.log(bundleUrl, 'bundleUrl');
			storage.setItem("bundleUrl", bundleUrl, e => {
				console.log('e')
			});
		},
		methods: {
			getJumpBaseUrl(toUrl) {
				var bundleUrl = weex.config.bundleUrl;
				var isnav = true
				bundleUrl = new String(bundleUrl);
				var nativeBase;
				var native;
				var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
				var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
				if (isAndroidAssets) {
					nativeBase = 'file://assets/dist/';
					native = nativeBase + toUrl + ".js";
				} else if (isiOSAssets) {
					nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
					native = nativeBase + toUrl + ".js";
				} else {
					var host = 'localhost:8081';
					var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
					if (matches && matches.length >= 2) {
						host = matches[1];
					}
					//此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
					if (typeof window === 'object') {
						nativeBase = 'http://' + host + '/';
					} else {
						nativeBase = 'http://' + host + '/';
					}
					native = nativeBase + toUrl + ".html";
				}
				return native;
			},
			goLogin() {
				console.log(weex);
				this.result = this.getJumpBaseUrl("page/login");
				util.navigatorPush(this.result, "true");
				// storage.getItem("bundleUrl", e => {
				// 	if (e.result === "success") {
				// 		let baseUrl = e.data;
				// 		let result = baseUrl + "/page/login.html";
				// 		console.log(result, 'result');
				// 		if (weex.config.env.platform === "Web") {
				// 			util.navigatorPush('./page/login.html', "true");
				// 		} else {
				// 			this.result = 'fille://assets/dist/page/login.html';
				// 			util.navigatorPush("fille://assets/dist/page/login.html", "true");
				// 		}
				// 	} else {
				// 		console.log(e, 'e')
				// 	}
				// });
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		justify-content: center;
		align-items: center;
	}
	.logo {
		width: 424px;
		height: 200px;
	}
	.greeting {
		text-align: center;
		margin-top: 70px;
		font-size: 50px;
		color: #41B883;
	}
	.message {
		margin: 30px;
		font-size: 32px;
		color: #727272;
	}
	.gologin {
		height: 40px;
		width: 200px;
		background-color: pink;
	}
	.logintext {
		color: blue;
	}
</style>
