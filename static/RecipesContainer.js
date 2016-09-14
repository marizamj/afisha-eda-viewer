const RecipesContainer = Backbone.Model.extend({
	defaults: {
		page: 1
	},

	initialize: function() {
		const recipes = this.get('recipes');

		recipes.loadNext(this.get('page'));

		this.listenTo(recipes, 'bottomReached', () => {
			this.nextPage();
		});

		this.on('change:page', () => {
			recipes.loadNext(this.get('page'));
		});
	},

	nextPage: function() {
		this.set('page', this.get('page') + 1);
	}
});

module.exports = RecipesContainer;
