const express = require('express');

const eda = require('afisha-eda');
const loadRecipes = eda.loadRecipes;

const app = express();

app.get('/loadRecipes', function (req, res) {

	if (req.query.page) {

		const page = req.query.page.toString();

		loadRecipes(page, recipes => {
			res.json(recipes);
		});
	}
});

app.use(express.static('static'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
