function createHomePage() {
  const content = document.getElementById("content");

  content.textContent = "";

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";
  
  const description = document.createElement("p");
  description.textContent = "Experience the finest dining in town. Our chefs prepare delicious meals with fresh, locally-sourced ingredients.";
  
  const hours = document.createElement("div");
  hours.classList.add("hours");
  hours.innerHTML = `
    <h2>Hours</h2>
    <p>Monday - Friday: 11am - 10pm</p>
    <p>Saturday - Sunday: 9am - 11pm</p>
  `;
  
  const location = document.createElement("div");
  location.classList.add("location");
  location.innerHTML = `
    <h2>Location</h2>
    <p>123 Main Street, Your City</p>
  `;

  homeDiv.appendChild(headline);
  homeDiv.appendChild(description);
  homeDiv.appendChild(hours);
  homeDiv.appendChild(location);

  content.appendChild(homeDiv);
}

export default createHomePage;