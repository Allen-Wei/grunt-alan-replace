# grunt-alan-replace

> replace file content

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-alan-replace --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-alan-replace');
```

## The "alan_replace" task

### Overview
In your project's Gruntfile, add a section named `alan_replace` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  alan_replace: {
    options: {
      keep: boolean //在生成新文件时是否保存源文件
    },
    taskName: {
       replaces: [{
            src: "README.md",         //源文件
            dest: "README.main.md",   //输出文件位置(如果不提供dest参数, 将会强制删除源文件之后才把替换后的内容写入到文件)
            pattern: /alan/ig,        //这个参数是正则表达式, 这里的意思是把所有的alan替换成 Allen Wei
            replace: "Allen Wei"      //替换后的值
          },{
            src:"README.md",
            dest: "README.nowrap.md",
            pattern:/\s/g,    //删除所有的空白字符
            replace: ""
        }]
    },
  },
});
```

### Options

#### options.keep
Type: `Boolean`
Default value: `false`

是否保留源文件. 这里需要注意的是, 当你省略`dest`参数时, 默认输出到源文件的位置, 所以这个时候, 源文件(`src`)会被强制删除, 不管你提供的`keep`是否为`true`.

`

## Contributing
源码请访问 [项目地址](https://github.com/Allen-Wei/grunt-alan-replace).

## Release History
_(Nothing yet)_
