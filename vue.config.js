module.exports = {
    publicPath: "/",
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
