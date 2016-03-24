
## 如何使用本demo

打开终端执行如下命令:

	git clone https://github.com/Allen-Wei/grunt-alan-replace.git //下载项目到本地
	cd test/demo	//切换到 test/demo 目录
	npm install		//安装依赖
	grunt			//执行自动化任务

如果你正确安装了node和grunt-cli(`npm install -g grunt-cli`), 上面应该能正常实行完毕.
然后你就能看到有一个`dist`目录, 这里面是压缩后的JS和HTML(当然了页面打开看不到东西, 因为这只是一个简单的demo, JS文件是随便找的.). 在配置文件`Grungfile.js`能看到关于[grunt-alan-replace](https://www.npmjs.com/package/grunt-alan-replace)的配置.
