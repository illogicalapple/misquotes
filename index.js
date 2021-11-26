function newQuote() {
	fetch("quotes.json").then(response => response.json()).then(quotes => {
		let number = ~~(Math.random() * quotes.length);
		document.querySelector(".quote").innerText = quotes[number][0];
		document.querySelector(".person").innerText = quotes[number][1];
	});
	fetch("images/images.json").then(response => response.json()).then(images => {
		document.querySelector("main").setAttribute("style", "background-image: url(images/" + String(~~(Math.random() * images.length)) + ")");
	})
}
addEventListener("load", function() {
	newQuote();
});
