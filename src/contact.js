function createContact() {
  const content = document.getElementById("content");
  
  content.textContent = "";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  
  const details = document.createElement("h1");
  details.textContent = "Contact details:";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = " Phone Number: +11 22344566";

  const email = document.createElement("p");
  email.textContent = "Email: diddy@blud.com";

  const address = document.createElement("p");
  address.textContent = "Address: Didden Bludden straten";

  contactDiv.appendChild(details);
  contactDiv.appendChild(phoneNumber);
  contactDiv.appendChild(email);
  contactDiv.appendChild(address);
  content.appendChild(contactDiv);
}

export default createContact;