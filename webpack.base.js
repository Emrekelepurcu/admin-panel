const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|ico)$/i,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src/'),
      '@layouts': path.join(__dirname, 'src/view/Layouts'),
      '@modules': path.join(__dirname, 'src/view/Modules'),
      '@constants': path.join(__dirname, 'src/constants'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@icons': path.join(__dirname, 'src/assets/icons'),
      '@states': path.join(__dirname, 'src/state/Modules'),
      '@store': path.join(__dirname, 'src/store'),
      '@services': path.join(__dirname, 'src/state/Services'),
      '@components': path.join(__dirname, 'src/components'),
      '@routes': path.join(__dirname, 'src/routes'),
      '@server': path.join(__dirname, 'server/'),
      '@serverHelper': path.join(__dirname, 'server/helper'),
      '@events': path.join(__dirname, 'src/events/events'),
      '@hooks': path.join(__dirname, 'src/hooks')
    }
  }
}
