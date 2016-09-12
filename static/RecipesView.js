const RecipeView = require('./RecipeView');

const RecipesView = Backbone.View.extend({
	render: function() {
		this.el.innerHTML = '';

		if (this.collection.length > 0) {
			this.collection.models.forEach(recipe => {
				const recipeView = new RecipeView({ model: recipe });

				this.el.appendChild(recipeView.render().el);
			});
		}

		return this;
	}
});

module.exports = RecipesView;
