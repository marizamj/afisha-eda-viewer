const Backbone = require('backbone');

const Recipe = require('./Recipe');
const RecipeView = require('./RecipeView');
const Recipes = require('./Recipes');
const RecipesView = require('./RecipesView');
const RecipesContainer = require('./RecipesContainer');
const RecipesContainerView = require('./RecipesContainerView');

const recipesContainer = new RecipesContainer({
	recipes: new Recipes([])
});

const recipesContainerView = new RecipesContainerView({
	el: document.body,
	model: recipesContainer,
});

recipesContainerView.render();
