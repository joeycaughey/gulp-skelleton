/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
	config: {},
	modules: [],
	js: [],
	css: [],
	scss: [],
	images: [],
	init: function(config) {
		var self = this;
		self.config = config;

	 	self.config.modules.forEach(function(module) {
	        var dir = "_assets/" + module;
	        self.js.push(dir + "/*.js");
	        self.css.push(dir + "/*.css");
	        self.scss.push(dir + "/*.scss");
	        self.images.push(dir + "/*.jpg");
	        self.images.push(dir + "/*.png");
	    });
	}
}