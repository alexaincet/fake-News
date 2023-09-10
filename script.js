// JavaScript code for fetching news articles from Google News and Wikipedia APIs and fake news detection goes here

const newsList = document.getElementById("news-list");
const newsInput = document.getElementById("news-input");
const detectButton = document.getElementById("detect-button");
const detectionResult = document.getElementById("detection-result");

// Fetch and display news articles from the Google News API
fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_GOOGLE_NEWS_API_KEY')
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        articles.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsList.appendChild(newsItem);
        });
    })
    .catch(error => {
        console.error("Error fetching Google News:", error);
    });

// Event listener for fake news detection
detectButton.addEventListener("click", () => {
    const newsText = newsInput.value;
    
    // You would implement a fake news detection algorithm here
    
    // For demonstration purposes, let's assume it's detected as fake if it contains the word "hoax"
    if (newsText.toLowerCase().includes("hoax")) {
        detectionResult.innerText = "Fake News Detected!";
    } else {
        detectionResult.innerText = "Genuine News";
    }
});
