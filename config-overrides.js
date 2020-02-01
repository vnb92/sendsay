const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  webpack: function(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        include: path.resolve('./src/svgIcons'),
        use: [
          { 
            loader: 'svg-sprite-loader',
            options: { extract: false }
          },
          'svg-transform-loader',
          'svgo-loader'
        ]
      }
    )

    config.plugins.push(
      new SpriteLoaderPlugin()
    )
    return config
  }
}