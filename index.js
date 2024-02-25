const input = document.querySelector("#input-field");
const output = document.querySelector(".output-encrip-field");
const encripBtn = document.querySelector("#encrip-btn");
const desEncripBtn = document.querySelector("#desencrip-btn");

document.addEventListener("DOMContentLoaded", (e) => {
	//input.reset();
	encripBtn.addEventListener("click", (e) => {
		e.preventDefault();
		modifyOutput(output, encryp(input.value));
	});

	desEncripBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (output.textContent !== "" && input) {
			e.preventDefault();
			modifyOutput(output, descryp(input.value));
		}
	});
});

function encryp(paragraph) {
	if (paragraph !== "") {
		return paragraph
			.replaceAll("e", "enter")
			.replaceAll("a", "ai")
			.replaceAll("i", "imes")
			.replaceAll("o", "ober")
			.replaceAll("u", "ufat");
	}
}
function descryp(paragraph) {
	if (paragraph !== "") {
		return paragraph
			.replaceAll("enter", "e")
			.replaceAll("imes", "i")
			.replaceAll("ai", "a")
			.replaceAll("ober", "o")
			.replaceAll("ufat", "u");
	}
}

function modifyOutput(element, value) {
	if (element.hasChildNodes()) {
		element.replaceChildren();
		let p = document.createElement("p");
		p.textContent = value;
		element.append(p);
	}
}
