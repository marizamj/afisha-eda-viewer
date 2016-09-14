const RecipeView = Backbone.View.extend({
	render: function() {
		this.el.innerHTML =
		`
			<h2><a href="${this.model.get('url')}">${this.model.get('title')}</a></h2>
			<img src="${this.model.get('image')}" />
			<p><a href="${this.model.get('authorUrl')}">Author: ${this.model.get('author')}</a></p>
			<p>Rating: ${this.model.get('rating')}%</p>
		`;

		return this;
	}
});

module.exports = RecipeView;
