const data = null;

const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api.spoonacular.com/food/search/macaron");
xhr.setRequestHeader("x-rapidapi-key", "8d59258793mshccc8f9533d442a7p1e75b2jsna2c9a4128e35");
xhr.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");

xhr.send(data);