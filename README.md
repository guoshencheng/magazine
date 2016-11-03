## magazine

a websit to make magazine

webpack 配置打包 `/public/apps/` 下的所有文件

`parts` 下包含了所有的web组件

`lib` 下包含了绘制工具类

### routers

```
/
功能主页 -> views/react.ejs
并通过ejs的name参数获取打包后的js文件 (在webpack.config.js中描述)

```

### 启动

开发启动

```bash
npm run test //test 的指令描述在package.json中
```

生产启动

```bash
npm run build
npm start
```
