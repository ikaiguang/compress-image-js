# 图片压缩

图片压缩工具

- 基于：[tsdx](https://github.com/jaredpalmer/tsdx)
- 基于：[UPNG.js](https://github.com/photopea/UPNG.js)

## 目前支持

- PNG图片压缩；[PNG压缩质量例子](https://blog.photopea.com/png-minifier-inside-photopea.html#examples)

## 运行测试

```shell

# 初始化项目
#npx tsdx create compress-image-js

# 安装依赖
yarn install
npm install

# 开发：启动服务 || 发布：构建服务
yarn start
yarn build

# 帮助
yarn main:help
# or node
node ./dist/index.js --help

# 运行测试
yarn main \
  -a compress \
  -f png \
  -q 50 \
  -i ./testdata/png/mbike.png \
  -o ./testdata/png/mbike-50.png
# or node
node ./dist/index.js \
  -a compress \
  -f png \
  -q 50 \
  -i ./testdata/png/mbike.png \
  -o ./testdata/png/mbike-50.png


```



