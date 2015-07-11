module.exports = {
    context: __dirname,
    entry: './src/app.tsx',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.tsx', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader?instance=jsx&compiler=ntypescript' }
        ]
    }
}
