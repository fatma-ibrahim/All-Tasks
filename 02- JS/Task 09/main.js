// Initialize EmailJS
emailjs.init("JffZZVT3QDJma3QWw"); 

// Show the contact form when "Contact" is clicked
document
  .getElementById("contactLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".contact").style.display = "block";
    document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
  });

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_c03vdwj", "template_ywdy8jp", this).then(
      function () {
        // Display success message
        const notification = document.getElementById("notification");
        notification.className = "notification success";
        notification.textContent = "Message sent successfully!";
        notification.style.display = "block";
        setTimeout(() => {
          notification.style.display = "none";
        }, 5000);

        // Reset form
        document.getElementById("contact-form").reset();
      },
      function (error) {
        // Display error message
        const notification = document.getElementById("notification");
        notification.className = "notification error";
        notification.textContent = "There was an error sending your message.";
        notification.style.display = "block";
        setTimeout(() => {
          notification.style.display = "none";
        }, 5000);
      }
    );
  });

// Fetch news from NewsAPI and display it
const apiKey = "04476306a733476cbeed34637efe0ccb";
const countries = ["us"];
let currentPage = 1;
let articlesPerPage = 3;
let currentCategory = "technology";
let allArticles = [];

async function fetchNews(category) {
  currentCategory = category;
  currentPage = 1;
  const container = document.getElementById("news-container");
  container.innerHTML = ""; // Clear existing news
  allArticles = [];

  for (let country of countries) {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
    );
    const data = await response.json();
    allArticles = allArticles.concat(data.articles);
  }

  displayNews();
}

function displayNews() {
  const container = document.getElementById("news-container");
  container.innerHTML = ""; // Clear existing news
  const start = (currentPage - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  const articles = allArticles.slice(start, end);

  articles.forEach((article) => {
    const card = document.createElement("div");
    card.className = "card";
    const imageUrl = article.urlToImage || "8.jpeg"; // Default image if urlToImage is not available
    card.innerHTML = `
      <img src="${imageUrl}" alt="News Image" class="card-img">
      <div class="card-content">
        <h3 class="card-title">${article.title}</h3>
        <p class="card-author">${
          article.author ? article.author : "Unknown author"
        }</p>
        <button class="btn source-btn" onclick="window.open('${
          article.url
        }', '_blank')">Source</button>
        <button class="btn details-btn" onclick="showDetails('${
          article.title
        }', '${
      article.description || "No details available"
    }')">Details</button>
      </div>
    `;
    container.appendChild(card);
  });

  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = end >= allArticles.length;
}

function showDetails(title, description) {
  const detailsWindow = window.open("", "_blank");
  detailsWindow.document.write(`
    <html>
    <head>
      <title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { font-size: 24px; }
        p { font-size: 18px; }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      <p>${description}</p>
    </body>
    </html>
  `);
}

// Add event listeners for category links
document
  .getElementById("technologyLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    fetchNews("technology");
  });

document
  .getElementById("scienceLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    fetchNews("science");
  });

// Add event listeners for pagination buttons
document.getElementById("prevPage").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    displayNews();
  }
});

document.getElementById("nextPage").addEventListener("click", function () {
  if (currentPage * articlesPerPage < allArticles.length) {
    currentPage++;
    displayNews();
  }
});

// Fetch technology news on page load
fetchNews("technology");
