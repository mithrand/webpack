const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//webpack configuration
module.exports = {
  entry: { // genera un bundle por cada entry point. ver output -> filename para saber que nombre tendra cada entrada 
    app:'./src/index.tsx',
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
    alias: {
      images: path.join(__dirname,'src/statics/images'),
      styles: path.join(__dirname,'src/statics/styles'),
      components: path.join(__dirname,'src/components')
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // elimina todo el contenido en la carpeta dist
    new HtmlWebpackPlugin({ template: 'src/statics/template/index.hbs' }), // Autogenera el index.html y anade los bundles al body
    // new ExtractTextPlugin("styles.css"), // para extraer el css en un archivo independiente, aun no es compatible con webpack 4
    new MiniCssExtractPlugin({ filename: "css/[name].[chunkhash].css", chunkFilename: "[id].css"}) // para extraer el css en un archivo independiente
  ],
  module: {
    rules:[
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
      },
      { // Carga de css
        test: /\.css$/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader
          },
          {
            loader:"css-loader",
          }]
      },
      { // Carga de ficheros
        test:/\.(png|svg|jpg|gif)$/,
        use:[{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          },   
        }]
      },
      { // Carga de ficheros
        test:/\.(woff|woff2)$/,
        use:[{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          },   
        }]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, 
          {
            loader: "css-loader" // translates CSS into CommonJS
          },   
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
    ]
  },
  optimization: {
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
    filename: 'bin/[name].[chunkhash].bundle.js', // [name] se sustituira por el nombre del entry point [app,print...]
    path: path.resolve(__dirname, 'dist'), // folder de salida
  },
}