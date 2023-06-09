const container = document.querySelector(".container");

let defaultImage = require("../public/newspaper.jpg");

//Create cards from data
export const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `<div class="news-image-container">
      <img src="${item.urlToImage || defaultImage}" alt="" />
      </div>
      <div class="news-content">
        <div class="news-title">
          ${item.title}
        </div>
        <div class="news-description">
        ${item.description || item.content || ""}
        </div>
        <a href="${item.url}" target="_blank" class="view-button">Read More</a>
      </div>`;
    container.appendChild(card);
  }
};
