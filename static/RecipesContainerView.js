const RecipesView = require('./RecipesView');

const RecipesContainerView = Backbone.View.extend({
	render: function() {
		const recipes = this.model.get('recipes');

		const recipesView = new RecipesView({
			collection: recipes
		});

		this.el.appendChild(recipesView.render().el);

		return this;
	},
});

module.exports = RecipesContainerView;
