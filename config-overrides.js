const {
    injectBabelPlugin
} = require('react-app-rewired');

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

function customize(config) {
    config.output.publicPath = './';
    return config
}

module.exports = override(
    customize,
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {}
    }),
);
