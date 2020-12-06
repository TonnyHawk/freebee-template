let path = require('path');

module.exports = {
   mode: "production",
   entry: './src/js/main.js',
   output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: 'all.min.js'
    },
}