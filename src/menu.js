function createMenuItem(name, description, price) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  
  const foodName = document.createElement("h2");
  foodName.textContent = name;
  
  const foodDesc = document.createElement("p");
  foodDesc.textContent = description;
  
  const foodPrice = document.createElement("p");
  foodPrice.textContent = price;
  
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDesc);
  menuItem.appendChild(foodPrice);
  
  return menuItem;
}

function createMenu() {
  const content = document.getElementById("content");
  content.textContent = "";
  
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  
  const title = document.createElement("h1");
  title.textContent = "Our Menu";
  menuDiv.appendChild(title);
  
  menuDiv.appendChild(createMenuItem("Doner Kebab", "Doner made by donerman with aryan", "$5"));
  menuDiv.appendChild(createMenuItem("Pizza Margherita", "pizza with fresh mozzarella", "$12"));
  menuDiv.appendChild(createMenuItem("Burger Deluxe", "burger with fries", "$10"));
  menuDiv.appendChild(createMenuItem("Caesar Salad", "lettuce with Caesar dressing", "$8"));
  
  content.appendChild(menuDiv);
}

export default createMenu;