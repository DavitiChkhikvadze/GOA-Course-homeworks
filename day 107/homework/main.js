import {Item} from "./classes/class.mjs"

const Item1 = new Item('car', 'toys', '25')
const Item2 = new Item('lego', 'building', '30')

const items = [Item1, Item2];
const container = document.getElementById("items-container");

items.forEach(item => {
    const itemElement = document.createElement("p");
    itemElement.textContent = `${item.name} - ${item.category} - $${item.price}`;
    container.appendChild(itemElement);
});
