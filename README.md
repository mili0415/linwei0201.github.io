基于webpack react搭建的博客系统，[线上地址](http://missweiweian.com)

## 功能支持
- mock
- hot module reload
- stylus, less
- ejs template
- public Path设置
- 文件hash
- js，css压缩，commonChunck提取


## Coming Soon, 敬请期待~~
- CleanWebpackPlugin  //编译前删除dist目录，现有的不支持自定义目录结构
- DLL & happypack     //加快编译速度
- ProvidePlugin       //全局变量，如jQuery, lodash
- source-map

## 目录结构

```
linwei0201.github.io
  |-- article    //文章列表
    |-- aaa.md
    |-- bbb.md
  |-- dist       //编译后的输出
    |-- js
    |-- css
    |-- font
  |-- src
    |-- data        //【不要修改】文章信息列表，由插件自动生成
    |-- mock        //mock接口，通过/api/aaa.json 或 /api/aaa 访问
    |-- modules     //公用组件
    |-- pages       //页面
    |-- styles      //公用样式
    |-- templates   //模板文件，因为是单页，所以只有index.ejs
    |-- utils       //工具类及方法
  |-- webpack       //webpack配置文件
    |-- loaders     //本地loader
    |-- plugins     //本地plugin
    |-- config.common.js   //公用配置
    |-- config.dev.js      //开发环境配置
    |-- config.prod.js     //生产环境配置
    |-- server.js          //webpack-dev-server配置
  |-- .babelrc             //babel编译配置
  |-- .gitignore           //gitignore
  |-- .nojekyll            //不使用jekyll编译github代码
  |-- index.html           //【不要修改】自动生成的，编译后拷贝到根目录
  |-- package.json         //npm依赖及脚本定义
```

## 本地运行步骤

```
1. git clone https://github.com/linwei0201/linwei0201.github.io.git
2. npm i
3. npm start 
4. 浏览器打开127.0.0.1:8888
```

## 本地编译步骤

```
1. git clone https://github.com/linwei0201/linwei0201.github.io.git
2. npm i
3. npm run local 
4. 根目录下启动一个http-server（可以从npm安装）
5. 浏览器打开127.0.0.1:8080
```




