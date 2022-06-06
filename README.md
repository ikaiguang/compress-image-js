# 图片压缩

图片压缩工具

## 运行测试

```shell

# 初始化项目
#npx tsdx create compress-image-js

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



