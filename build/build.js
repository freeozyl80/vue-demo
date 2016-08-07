var webpack = require('webpack')
var path = require('path')
var webpackConfig = require('./webpack.prod.config')
require('shelljs/global')

var assetsPath = path.join(path.resolve(__dirname, '../dist'),'')
echo(assetsPath);
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)

webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})