const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//webpack configuration
module.exports = {
  entry: { // genera un bundle por cada entry point. ver output -> filename para saber que nombre tendra cada entrada 
    app:'./src/index.ts',
    print:'./src/components/print'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // elimina todo el contenido en la carpeta dist
    new HtmlWebpackPlugin({ title: 'Output Management' }), // Autogenera el index.html y anade los bundles al body
    // new ExtractTextPlugin("styles.css"), // para extraer el css en un archivo independiente, aun no es compatible con webpack 4
    new MiniCssExtractPlugin({ filename: "[name].[chunkhash].css", chunkFilename: "[id].css"}) // para extraer el css en un archivo independiente
  ],
  module: {
    rules:[
      { // Carga de css
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,"css-loader"]
      },
      { // Carga de ficheros
        test:/\.(png|svg|jpg|gif)$/,
        use:['file-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization:{
    splitChunks: { // genera un bundle separado que incluye solo las librerias de node_modules
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  output: {
    filename: '[name].[chunkhash].bundle.js', // [name] se sustituira por el nombre del entry point [app,print...]
    path: path.resolve(__dirname, 'dist'), // folder de salida
  },
}