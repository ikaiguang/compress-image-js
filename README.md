# 图片压缩

图片压缩工具

## 运行测试

```shell

# 初始化项目
#npx tsdx create compress-image-js

# 开发：启动服务 || 发布：构建服务
yarn start
yarn build

# 运行测试
yarn main \
  -a compress \
  -f png \
  -q 50 \
  -i ./mytest/testdata/mbike.png \
  -o ./mytest/testdata/mbike-50.png
yarn main \
  -a compress \
  -f png \
  -q 50 \
  -i ./mytest/testdata/mouse.png \
  -o ./mytest/testdata/mouse-50.png
yarn main \
  -a compress \
  -f png \
  -q 50 \
  -i ./mytest/testdata/pug.png \
  -o ./mytest/testdata/pug-50.png
yarn main \
  -a compress \
  -f png \
  -q 50 \
  -i ./mytest/testdata/rose-icon.png \
  -o ./mytest/testdata/rose-icon-50.png
yarn main \
  -a compress \
  -f png \
  -q 50 \
  -i ./mytest/testdata/spritesheet.png \
  -o ./mytest/testdata/spritesheet-50.png


```



