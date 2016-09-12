const Recipe = require('./Recipe');

const Recipes = Backbone.Collection.extend({
	model: Recipe,
});

module.exports = Recipes;
