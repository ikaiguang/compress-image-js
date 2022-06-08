# 图片压缩

图片压缩工具

- 基于：[dts-cli](https://www.npmjs.com/package/dts-cli)
- 基于：[UPNG.js](https://github.com/photopea/UPNG.js)

## 目前支持

- 压缩PNG图片
- 压缩JPG/JPEG图片

## 全局安装

```shell

# 全局安装
#sudo npm i compress-picture-js@0.0.5 --location=global
sudo npm i compress-picture-js -g

# 运行帮助
compress-picture-js --help
# 运行测试：压缩 PNG
compress-picture-js \
  -a compress \
  -f png \
  -q 50 \
  -i ./path/to/dir/testdata.png \
  -o ./path/to/dir/testdata-50.png
# 运行测试：压缩 JPG/JPEG
compress-picture-js \
  -a compress \
  -f jpg \
  -q 50 \
  -i ./path/to/dir/testdata.jpg \
  -o ./path/to/dir/testdata-50.jpg

```

## 运行测试

```shell

# 初始化项目
# npx dts-cli create compress-picture-js

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

# 运行测试：PNG
yarn main \
  -a compress \
  -f png \
  -q 50 \
  -i ./testdata/png/mbike.png \
  -o ./testdata/png/mbike-50.png
# 运行测试：JPG/JPEG
yarn main \
  -a compress \
  -f jpg \
  -q 80 \
  -i ./testdata/jpg/picture.jpeg \
  -o ./testdata/jpg/picture-80.jpeg


```



