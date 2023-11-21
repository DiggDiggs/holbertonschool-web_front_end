/* 
set webpack-dev-server configuration options.
*/
path = require('path');

module.exports = {
    mode: 'development',
    output: {
        filename: 'index.js',
    },
    devServer: {
    static: {
        // Serve from the root directory
        directory: path.join(__dirname, './'),
        },
    }
};
