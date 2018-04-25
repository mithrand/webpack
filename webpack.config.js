const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

//webpack configuration
module.exports = {
  entry: { // genera un bundle por cada entry point. ver output -> filename para saber que nombre tendra cada entrada 
    app:'./src/index.js', 
    print:'./src/components/print',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // elimina todo el contenido en la carpeta dist
    new HtmlWebpackPlugin({ 
      title: 'Output Management',
    }), // Autogenera el index.html y anade los bundles al body
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    publicPath:'/'
  },
  module: {
    rules:[
      { // Carga de css
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      { // Carga de ficheros
        test:/\.(png|svg|jpg|gif)$/,
        use:['file-loader']
      }
    ]
  },
  output: {
    filename: '[name].bundle.js', // [name] se sustituira por el nombre del entry point [app,print...]
    path: path.resolve(__dirname, 'dist'), // folder de salida
    publicPath: '/', // public path used on webServer
  },
}