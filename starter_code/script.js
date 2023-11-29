
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let sortedNames = fruit.sort();
const input = document.querySelector('#fruit');
input.addEventListener("keyup", (e) => {
	removeElements();
	for (let i of sortedNames) {
		//convert input to lowercase and compare with each string
		if (

			i.toLowerCase().includes(input.value.toLowerCase()) &&
			input.value != ""
		) {
			//create li element
			let listItem = document.createElement("li");
			//One common class name
			listItem.classList.add("list-items");
			listItem.style.cursor = "pointer";
			listItem.setAttribute("onclick", "useSuggestion('" + i + "')");
			//Display matched part in bold
			let word = "<b>" + i.substr(0, input.value.length) + "</b>";
			word += i.substr(input.value.length);
			//display the value in array
			listItem.innerHTML = word;
			document.querySelector(".list").appendChild(listItem);
		}
	}
});

function useSuggestion(value) {
	input.value = value;
	removeElements();
}
function removeElements() {
	//clear all the item
	let items = document.querySelectorAll(".list-items");
	items.forEach((item) => {
		item.remove();
	});
}


