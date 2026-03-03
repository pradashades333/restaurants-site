function createHome() {
  const content = document.getElementById("content");
  
  content.textContent = "";

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to the restaurant";

  const description = document.createElement("p");
  description.textContent = "This restaurant was made by james and smith in 1999 and serves cocacola the old fashioned way";

  const hours = document.createElement("p");
  hours.textContent = "Hours: Mon - Fri: 9:00 - 19:00";

  const location = document.createElement("p");
  location.textContent = "Location: Berlin, Germany";

  const footer = document.createElement("p");
  footer.textContent = "© 2024 James & Smith Restaurant. All rights reserved.";
  footer.style.marginTop = "30px";
  footer.style.fontSize = "12px";
  footer.style.color = "#888";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(description);
  homeDiv.appendChild(hours);
  homeDiv.appendChild(location);
  homeDiv.appendChild(footer);
  content.appendChild(homeDiv);
}

export default createHome;