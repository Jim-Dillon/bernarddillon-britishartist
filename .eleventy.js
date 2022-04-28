module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("src/js/carousel.js")
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/css");
    return {
        dir: {
            input: "src",
            layouts: "_includes",
        },
    };
};    