const StyleDictionary = require("style-dictionary");
const { registerTransforms } = require("@tokens-studio/sd-transforms");

registerTransforms(StyleDictionary);

StyleDictionary.registerFormat({
  name: "css/variables",
  formatter: function (dictionary) {
    return `${this.selector} {\n${dictionary.allProperties
      .map(
        (prop) =>
          `  --${prop.type}-${prop.name}: ${prop.value}; ${
            prop.description ? `/* ${prop.description}*/` : ""
          }`
      )
      .join("\n")}\n}`;
  },
});

// generate css for each token set
["light", "dark", "global"].map((theme) => {
  const themeVariables = StyleDictionary.extend({
    source: [`src/tokens/${theme}.json`],
    platforms: {
      css: {
        transforms: [
          "ts/descriptionToComment",
          "ts/size/px",
          "ts/size/css/letterspacing",
          "ts/size/lineheight",
          "ts/type/fontWeight",
          "ts/resolveMath",
          "ts/typography/css/shorthand",
          "ts/border/css/shorthand",
          "ts/shadow/css/shorthand",
          "ts/color/css/hexrgba",
          "ts/color/modifiers",
          "name/cti/kebab",
        ],
        buildPath: "./",
        files: [
          {
            destination: `${theme}.css`,
            format: "css/variables",
            selector:
              theme === "dark" ? `:root[data-theme="${theme}"]` : `:root`,
          },
        ],
      },
    },
  });
  themeVariables.cleanAllPlatforms();
  themeVariables.buildAllPlatforms();
});
