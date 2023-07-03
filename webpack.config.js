const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"), //базовая папка
  mode: "development",
  // Итак судя по всему в новой версии webpack на 26/11/20
  // нельзя запустить webpack- dev - server--open, во первых теперь команда выглядит так "start": "webpack serve", а для дополнительных опций, таких как открытие окна браузера  переходим в конфиг и в module.exports{
  // devServer: {open: true}}
  devServer: {
    port: 8080,
    open: true,
  },
  entry: {
    main: "./index.js",
    post: "./Post.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // не писать расширения в ипортах
    extensions: [".js", ".json", ".wasm"],
    // относительные пути
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  //надстройки
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(), //чистится dist от неактуальных файлов
  ],
  //работа с другими типами файлов
  module: {
    rules: [
      {
        test: /\.css$/,
        // слева-направо
        //style-loader добавляет в секцию head в html
        //css-loader парсит css файлы
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: "asset/resource", // вместо file-loader  webpack 5 версии решил сделать их из коробки, для упрощения работы с другими созависимыми модулями.
      },
      ,
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: "asset/resource", // вместо file-loader  webpack 5 версии решил сделать их из коробки, для упрощения работы с другими созависимыми модулями.
      },
    ],
  },
};
