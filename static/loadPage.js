const Backbone = require('backbone');

const Recipe = require('./Recipe');
const RecipeView = require('./RecipeView');
const Recipes = require('./Recipes');
const RecipesView = require('./RecipesView');

let page = 1;

function load(page) {
	fetch(`/loadRecipes?page=${page}`).then(response => {
		return response.json();
	}).then(json => {
		const recipes = new Recipes(json);

		const div = document.createElement('div');
		div.classList.add('recipes-wrapper');
		div.innerHTML = 'Loading...';
		document.body.appendChild(div);
		const recipesView = new RecipesView({
			collection: recipes,
			el: div
		}).render();

		const loadingDiv = document.querySelector('.loading');

		if (loadingDiv) {
			loadingDiv.remove();
		}
	});
}

document.addEventListener('scroll', event => {
	const recipesWrapper = document.querySelector('.recipes-wrapper');
	const recipesScrollHeight = recipesWrapper.scrollHeight;
	const recipesScrollTop = recipesWrapper.scrollTop;
	const recipesClientHeight = recipesWrapper.clientHeight;

	if (recipesScrollHeight - recipesScrollTop === recipesClientHeight) {

		// if (!document.querySelector('.loading')) {
		// 	page += 1;
		// 	const loading = document.createElement('div');
		// 	loading.classList.add('loading');
		// 	loading.innerHTML = 'Loading...';
		// 	document.body.appendChild(loading);
		// 	load(page);
		// console.log(page);
		// }


  }
});

load(page);
