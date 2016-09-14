const RecipeView = require('./RecipeView');

const RecipesView = Backbone.View.extend({
	className: 'recipes-container',

	initialize: function() {
		this.listenTo(this.collection, 'update', this.render.bind(this));

		this.listenTo(this.collection, 'loading', () => {
			const div = document.createElement('div');
			div.classList.add('loading');
			div.innerHTML = 'Loading more... <img src="bakercat.gif" width="200px" />';
			this.el.appendChild(div);
		});
	},

	render: function() {
		this.el.innerHTML = '';

		if (this.collection.length > 0) {
			this.collection.models.forEach(recipe => {
				const recipeView = new RecipeView({ model: recipe });

				this.el.appendChild(recipeView.render().el);
			});
		}
		return this;
	},

	events: {
		'scroll': 'scroll',
	},

	scroll: function() {
		const recipesScrollHeight = this.el.scrollHeight;
		const recipesScrollTop = this.el.scrollTop;
		const recipesClientHeight = this.el.clientHeight;

		if (recipesScrollHeight - recipesScrollTop === recipesClientHeight) {
			this.collection.trigger('bottomReached');
	  }
	}
});

module.exports = RecipesView;
