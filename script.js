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

const quoteBtn = document.querySelector(".quoteBtn");

fetch("https://animechan.xyz/api/random")
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

    console.log(characterName);
    console.log(animeTitle);
  });

//   const response = await fetch(anime);
//   const data = await response.json();
//   showQuote(data);
// };

// const showQuote = (data) => {
//   const animeData = data;
//   console.log(data);
// };
// const URL = "https://kitsu.io/api/edge/anime?filter[categories]=adventure";
// // fetch(URL)
// //   .then((response) => response.json())
// //   .then((url) => console.log(url));

// const getAnimes = async (api) => {
//   const response = await fetch(api);
//   const data = await response.json();
//   showAnimes(data);
//   showAnimes(data.data);
//   showAnimes(data.data.attributes.id);
// };
// const showAnimes = (data) => {
//   const animeData = data;
//   const animeImg = "https://kitsu.io/api/edge/anime/7442";
//   animeData.data.forEach((item) => {
//     console.log(item);
//     console.log(IMGPath + item.id);

//     const IMGPath = "https://media.kitsu.io/anime/cover_images";
//     const animeContainer = document.createElement("div");
//     animeContainer.classList.add("animeImgContainer");
//     animeContainer.innerHTML = `
//     <img src="${IMGPath + item.id}" alt="">
//     <div class="overlay">
//        <div class="title">
//          <h2>Title</h2>
//          <span>9.5</span>
//        </div>
//        <h3>Overview:</h3>
//        <p>
//          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
//          doloremque, neque dignissimos, obcaecati non ratione quaerat nulla
//          nostrum expedita magni voluptates eligendi distinctio nobis
//          assumenda voluptatibus, quas atque officiis officia laudantium
//          vel? Laboriosam fugiat consequatur pariatur inventore
//          perspiciatis. Quos, iure?
//        </p>
//      </div>
//     `;
//   });
// };
// getAnimes(URL);
