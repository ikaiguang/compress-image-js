#!/bin/sh

# 报错停止运行
set -e

# 版本号
echo "软件版本：$(node ./dist/index.js --version)"

# 运行测试：PNG
# compress-picture-js === node ./dist/index.js
echo "运行测试：PNG"
node ./dist/index.js \
  -a compress \
  -f png \
  -q 80 \
  -i ./testdata/png/mbike.png \
  -o ./testdata/png/mbike-80.png

# 运行测试：JPG/JPEG
# compress-picture-js === node ./dist/index.js
echo "运行测试：JPG/JPEG"
node ./dist/index.js \
  -a compress \
  -f jpg \
  -q 80 \
  -i ./testdata/jpg/picture.jpeg \
  -o ./testdata/jpg/picture-80.jpeg
