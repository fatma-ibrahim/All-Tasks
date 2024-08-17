// a)
document.addEventListener("DOMContentLoaded", function () {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const cardsContainer = document.getElementById("cardsContainer");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        const card = document.createElement("div");
        card.className = "card";

        const id = document.createElement("h3");
        id.textContent = `ID: ${post.id}`;

        const title = document.createElement("h4");
        title.textContent = `Title: ${post.title}`;

        const body = document.createElement("p");
        body.textContent = `Body: ${post.body}`;

        card.appendChild(id);
        card.appendChild(title);
        card.appendChild(body);
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// b) in JS
document.addEventListener("DOMContentLoaded", function () {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const dataTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = post.id;

        const titleCell = document.createElement("td");
        titleCell.textContent = post.title;

        const bodyCell = document.createElement("td");
        bodyCell.textContent = post.body;

        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(bodyCell);
        dataTable.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
