
      const filters = require('./_utils/filters.js');
      
      module.exports = function(eleventyConfig) {

        const references = JSON.parse('{"products**product":{"field":"product","limit":6}}');

        filters(eleventyConfig, references);

        eleventyConfig.addPassthroughCopy("static/**");
        eleventyConfig.addPassthroughCopy("admin/**");
        
        return {
          dir: {
            input: "site",
            includes: "_views",
            output: "public"
          }
        };
      };