const Recipe = require('./Recipe');

const Recipes = Backbone.Collection.extend({
	model: Recipe,

	loadNext: function(page) {
		this.trigger('loading');

		fetch(`/loadRecipes?page=${page}`).then(response => {
			return response.json();
		}).then(json => {
			this.add(json);
		});
	}
});

module.exports = Recipes;
