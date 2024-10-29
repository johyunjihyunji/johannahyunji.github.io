exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.(gltf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
              },
            ],
          },
          // If you also have .bin files associated with your gltf:
          {
            test: /\.(bin)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
              },
            ],
          },
        ],
      },
    });
  };
  