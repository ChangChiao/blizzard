module.exports = {
    publicPath: "./",
    outputDir: "docs",
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/setting.base";
                @import "@/scss/setting.rwd";
                @import "@/scss/tools.rwd";`,
            },
        },
    },
};
