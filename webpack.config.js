const path = require('path');

module.exports = {
    devtool: 'none',
    mode: 'development',
    // optimization: {
    //     usedExports: true,
    // },
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'loaders'),
        ]
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use: ['html-loader', 'markdown-loader']
                // use: {
                //     loader: 'markdown-loader'
                // }
            }
        ]
    }
};
