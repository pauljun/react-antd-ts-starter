const tsImportPluginFactory = require("ts-import-plugin");
const { getLoader,injectBabelPlugin  } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");
const theme =  require('./theme');

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === "string" &&
      rule.loader.includes("ts-loader")
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryDirectory: "es",
          libraryName: "antd",
          style: true
        })
      ]
    })
  };
  // 支持es7的`@`特性
  config = injectBabelPlugin('transform-decorators-legacy', config);
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: theme
  })(config, env);
  
  return config;
};
