# apicloud 使用 parcel bundler 和 vue 开发环境 demo

## 使用方法

### 命令行使用

```bash
    npm install

    // 开发环境
    npm run dev

    // 生产环境
    npm run build
```

### 声明html入口

主入口 src/index.html

子入口在主入口中声明并隐藏显示

```html
    <a class="dn" href="./pages/user/frame.html"></a>
```

## 构建原理

parcel的DEV环境能直接生成到构建后的文件到硬盘中, 配置--public-url为./之后, 通过parcel api监听每次打包的后的事件, 重新组装dist文件夹中的html文件的\<link\>\<sript\>链接, 变成相对路径模式, 其他的图片/css/js文件会直接生成在dist目录下, 同时parcel自带解析.vue文件能力, 能直接引入第三方ui库到vue完整版中

## 注意事项

- 有些错误可能没有捕获

- 每次打包后的wifi同步速度有可能会很慢(可能是我的网络问题), 同步文件多

- 如果出现文件没有更新, 例如添加新的文件夹和文件, \<link\>没有注入, 需要重新 npm run dev
