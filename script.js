const threeDots = document.querySelector(".bi-three-dots");
const sideBar = document.querySelector(".sideBar");
const crossIcon = document.querySelector(".bi-x-octagon-fill");
const body = document.querySelector("body");

threeDots.addEventListener("click", () => {
  sideBar.style.display = "flex";
  threeDots.style.display = "none";
});
crossIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
  threeDots.style.display = "block";
});

fetch("https://anime-chan.herokuapp.com/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    const quote = data.quote;
    const characterName = data.character;
    const animeTitle = data.anime;

    console.log(data);
    console.log(data.character);
    console.log(quote);
    document.querySelector(".quotePara").innerHTML = `"${quote}"`;
    document.querySelector(".animeCharacter").innerHTML = `-"${characterName}"`;
    document.querySelector(".animeName").innerHTML = `Anime -
    <br>"${animeTitle}"`;

    // console.log(characterName);
    // console.log(animeTitle);
  });

const animeList = document.querySelector(".popularAnimeList");
fetch("https://kitsu.io/api/edge/anime?filter[categories]=adventure")
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((item) => {
      const animeContainer = document.createElement("div");
      animeContainer.classList.add("animeImgContainer");
      animeContainer.innerHTML = `
      <img src ="${item.attributes.coverImage.small}">
       <div class="overlay">
       <div class="title">
         <h2>${item.attributes.canonicalTitle}</h2>
         <span>Rating - ${item.attributes.averageRating}</span>
       </div>
     
       <a
        href="https://www.youtube.com/watch?v=${item.attributes.youtubeVideoId}">
        Watch Trailer
      </a>
     </div>
      `;
      animeList.appendChild(animeContainer);
    });
  });
