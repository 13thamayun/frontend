let page = 1;
var type = "null";
var filter = "null";

const dubButton = document.getElementById("dubbtn");
const subButton = document.getElementById("allbtn");
const popButton = document.getElementById("popularbtn");
const upcButton = document.getElementById("upcomingbtn");
const moviesButton = document.getElementById("moviebtn");
const loadButton = document.getElementById("loadmorelist");


const searchForm = document.getElementById("search-form");
const searchResults = document.getElementById("search-results");
const searchInput = document.getElementById("q");

let searchFocused = false;

function search(term) {
  let quickSearchContainer = document.querySelector(
    ".quicksearchcontainer.absolutee"
  );
  // Set the display property to block
  quickSearchContainer.style.display = "block";
  // Send an AJAX request to the PHP script
  fetch("search.php?s=" + term + "&c=3")
    .then((response) => response.text())
    .then((data) => {
      // Update the search results
      document.getElementById("search-results").innerHTML = data;
    })
    .catch((error) => console.error(error));
}
document.getElementById("q").addEventListener("input", function () {
  search(this.value);
});

function scrollToTop(e) {
  iOS() || ("scrollBehavior" in document.documentElement.style ? window.scrollTo({
    top: 0,
    behavior: "smooth"
  }) : window.scrollTo(0, 0))
}

/*
function searchstop() {
  let quickSearchContainer = document.querySelector(
    ".quicksearchcontainer.absolutee"
  );
  // Set the display property to block
  quickSearchContainer.style.display = "none";
}
var nextInterval,
  featuredData = [],
  triedFeat = !1;
function loadFeatured(e = 0) {
  if (!triedFeat) {
    var t = new XMLHttpRequest();
    t.open("GET", "/assets/s/featured.json"),
      (t.timeout = 15e3),
      (t.onload = function () {
        200 === this.status &&
          isJson(t.responseText) &&
          ((featuredData = JSON.parse(t.responseText)),
          showFeatured(e, !1),
          (triedFeat = !0));
      }),
      t.send();
  }
}*/
/*Uncaught ReferenceError: curFeatured is not defined
var ImgPreload = [];
function showFeatured(e, t = !0) {
  if (featuredData.length < 1 && t) loadFeatured(e);
  else if (!(featuredData.length < 1)) {
    curFeatured > e && clearInterval(nextInterval);
    var o = featuredData.length - 1;
    e < 0 ? (e = o) : e > o && (e = 0);
    var n = e + 1,
      a = e - 1;
    a < 0 ? (a = o) : n > o && (n = 0),
      void 0 === ImgPreload[n] &&
        (ImgPreload[n] = new Image().src = featuredData[n].img),
      void 0 === ImgPreload[a] &&
        (ImgPreload[a] = new Image().src = featuredData[a].img),
      (curFeatured = e);
    var s = featuredData[e];
    gID(
      "featuredcard"
    ).innerHTML = `<div id="featuredbgcont">\n    <img id="featuredbg" src="${s.img}"/>\n</div>\n<div id="featuredcont">\n    <a href="${s.url}"><img id="featuredimg" src="${s.img}"/></a>\n    <div id="featuredtitle">\n        <a href="${s.url}">${s.title}</a>\n    </div>\n    <div id="featuredtext">${s.desc}</div>\n    <div id="featuredgenre"><i class="glyphicon glyphicon-tag"></i> ${s.genre}</div>\n    <a id="featuredNext" onClick="showFeatured(curFeatured + 1)"><i class="glyphicon glyphicon-chevron-right"></i></a>\n    <a id="featuredBack" onClick="showFeatured(curFeatured - 1)"><i class="glyphicon glyphicon-chevron-left"></i></a>\n</div>`;
  }
}*/

function showrecomendmenu() {
  // Change the style of the playerleftsidebar element
  document.getElementById("playerleftsidebar").style.animationName =
    "movein2recomend";
  var coverlight = document.getElementById("coverlight");
  coverlight.style.display = "block";
  coverlight.style.opacity = 0;
  coverlight.style.transition = "opacity 0.5s";
  setTimeout(function () {
    coverlight.style.opacity = 1;
  }, 50);
}
function hiderecomendmenu() {
  document.getElementById("playerleftsidebar").style.animationName =
    "moveout2recomend";
  var coverlight = document.getElementById("coverlight");
  coverlight.style.display = "none";
  coverlight.style.opacity = 1;
  coverlight.style.transition = "opacity 0.5s";
  setTimeout(function () {
    coverlight.style.opacity = 0;
  }, 50);
}
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "%cAniMixReplay",
    "font-size:35px;font-family:'Lexend deca',sans-serif;color:#7fc3ff;text-shadow:3px 3px #0b0b0b"//,
    //"console"
  );
 
});
//main.js:124 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') at main.js:124:11

dubButton.addEventListener("click", function () {
  console.log("Dub Page Load");
  var type = "tv";
  var filter = "dub";
  var limit = 24;
  fetch(
    `https://api.jikan.moe/v4/top/anime?type=${type}&filter=${filter}&limit=${limit}`
  )
    .then((response) => response.json())
    .then((data) => {
      const animeList = document.getElementById("homepage");
      animeList.innerHTML = "";
      data.data.forEach((series) => {
        const animeLi = document.createElement("li");
        animeLi.className = "anime";
        const link = document.createElement("a");
        link.href = "https://animixreplay.to/anime.php?id=" + series.mal_id;
        link.title = series.titles.title;
        animeLi.appendChild(link);
        const imageDiv = document.createElement("div");
        imageDiv.className = "searchimg";
        const poster = document.createElement("img");
        poster.className = "resultimg";
        poster.alt = "";
        poster.src = series.images.webp.image_url;
        imageDiv.appendChild(poster);
        const timeDiv = document.createElement("div");
        timeDiv.className = "timetext";
        timeDiv.textContent = series.aired.from.substring(0,10);
        imageDiv.appendChild(timeDiv);
        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating";
        ratingDiv.textContent = series.score;
        imageDiv.appendChild(ratingDiv);
        link.appendChild(imageDiv);
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";
        const nameP = document.createElement("p");
        nameP.className = "name";
        nameP.textContent = series.title_english;
        detailsDiv.appendChild(nameP);
        const infoP = document.createElement("p");
        infoP.className = "infotext";
        infoP.textContent =
        series.season.charAt(0).toUpperCase() + series.season.slice(1) + " " + series.year + " " + series.type;
        detailsDiv.appendChild(infoP);
        link.appendChild(detailsDiv);
        animeList.appendChild(animeLi);
      });
    });
});


subButton.addEventListener("click", function () {
  console.log("Sub Page Load");
  var type = "tv"; // or 'movie'
  var filter = "airing";
  var limit = 24;
  fetch(
    `https://api.jikan.moe/v4/top/anime?type=${type}&filter=${filter}&limit=${limit}`
  )
    .then((response) => response.json())
    .then((data) => {
      const animeList = document.getElementById("homepage");
      animeList.innerHTML = "";
      data.data.forEach((series) => {
        const animeLi = document.createElement("li");
        animeLi.className = "anime";
        const link = document.createElement("a");
        link.href = "https://animixreplay.to/anime.php?id=" + series.mal_id;
        link.title = series.titles.title;
        animeLi.appendChild(link);
        const imageDiv = document.createElement("div");
        imageDiv.className = "searchimg";
        const poster = document.createElement("img");
        poster.className = "resultimg";
        poster.alt = "";
        poster.src = series.images.webp.image_url;
        imageDiv.appendChild(poster);
        const timeDiv = document.createElement("div");
        timeDiv.className = "timetext";
        timeDiv.textContent = series.aired.from.substring(0,10);
        imageDiv.appendChild(timeDiv);
        const ratingDiv = document.createElement("div");
		const ratingstar = document.createElement("i");
		ratingstar.className = "glyphicon glyphicon-star";
		ratingDiv.appendChild(ratingstar);

        ratingDiv.className = "rating";
        ratingDiv.textContent = series.score;
        imageDiv.appendChild(ratingDiv);
        link.appendChild(imageDiv);
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";
        const nameP = document.createElement("p");
        nameP.className = "name";
        nameP.textContent = series.title_english;
        detailsDiv.appendChild(nameP);
        const infoP = document.createElement("p");
        infoP.className = "infotext";
        infoP.textContent =
        series.season.charAt(0).toUpperCase() + series.season.slice(1) + " " + series.year + " " + series.type;
        detailsDiv.appendChild(infoP);
        link.appendChild(detailsDiv);
        animeList.appendChild(animeLi);
      });
    });
});

popButton.addEventListener("click", function () {
  console.log("Popular Page Load");
  var type = "tv"; // or 'movie'
  var filter = "bypopularity";
  var limit = 24;
  fetch(
    `https://api.jikan.moe/v4/top/anime?type=${type}&filter=${filter}&limit=${limit}`
  )
    .then((response) => response.json())
    .then((data) => {
      const animeList = document.getElementById("homepage");
      animeList.innerHTML = "";
      data.data.forEach((series) => {
        const animeLi = document.createElement("li");
        animeLi.className = "anime";
        const link = document.createElement("a");
        link.href = "https://animixreplay.to/anime.php?id=" + series.mal_id;
        link.title = series.titles.title;
        animeLi.appendChild(link);
        const imageDiv = document.createElement("div");
        imageDiv.className = "searchimg";
        const poster = document.createElement("img");
        poster.className = "resultimg";
        poster.alt = "";
        poster.src = series.images.webp.image_url;
        imageDiv.appendChild(poster);
        const timeDiv = document.createElement("div");
        timeDiv.className = "timetext";
        timeDiv.textContent = series.aired.from.substring(0,10);
        imageDiv.appendChild(timeDiv);
        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating";
        ratingDiv.textContent = series.score;
        imageDiv.appendChild(ratingDiv);
        link.appendChild(imageDiv);
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";
        const nameP = document.createElement("p");
        nameP.className = "name";
        nameP.textContent = series.title_english;
        detailsDiv.appendChild(nameP);
        const infoP = document.createElement("p");
        infoP.className = "infotext";
        infoP.textContent =
        series.season.charAt(0).toUpperCase() + series.season.slice(1) + " " + series.year + " " + series.type;
        detailsDiv.appendChild(infoP);
        link.appendChild(detailsDiv);
        animeList.appendChild(animeLi);
      });
    });
});

upcButton.addEventListener("click", function () {
  console.log("Upcoming Page Load");
  var type = "tv"; // or 'movie'
  var filter = "upcoming";
  var limit = 24;
  fetch(
    `https://api.jikan.moe/v4/top/anime?type=${type}&filter=${filter}&limit=${limit}`
  )
    .then((response) => response.json())
    .then((data) => {
      const animeList = document.getElementById("homepage");
      animeList.innerHTML = "";
      data.data.forEach((series) => {
        const animeLi = document.createElement("li");
        animeLi.className = "anime";
        const link = document.createElement("a");
        link.href = "https://animixreplay.to/anime.php?id=" + series.mal_id;
        link.title = series.titles.title;
        animeLi.appendChild(link);
        const imageDiv = document.createElement("div");
        imageDiv.className = "searchimg";
        const poster = document.createElement("img");
        poster.className = "resultimg";
        poster.alt = "";
        poster.src = series.images.webp.image_url;
        imageDiv.appendChild(poster);
        const timeDiv = document.createElement("div");
        timeDiv.className = "timetext";
        timeDiv.textContent = series.aired.string;
        imageDiv.appendChild(timeDiv);
        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating";
        ratingDiv.textContent = series.score;
        imageDiv.appendChild(ratingDiv);
        link.appendChild(imageDiv);
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";
        const nameP = document.createElement("p");
        nameP.className = "name";
        nameP.textContent = series.title_english;
        detailsDiv.appendChild(nameP);
        const infoP = document.createElement("p");
        infoP.className = "infotext";
        infoP.textContent =
        series.year + " " + series.type;
        detailsDiv.appendChild(infoP);
        link.appendChild(detailsDiv);
        animeList.appendChild(animeLi);
      });
    });
});

moviesButton.addEventListener("click", function () {
  console.log("Movie Page Load");
  // Set the type, filter, and limit for the API request
  var type = 'movie';
  var filter = "bypopularity";
  var limit = 24;
  // Send a request to the Jikan API to retrieve a list of popular anime movies
  fetch(
    `https://api.jikan.moe/v4/top/anime?type=${type}&filter=${filter}&limit=${limit}`
  )
    .then((response) => response.json())
    .then((data) => {
      const animeList = document.getElementById("homepage");
      animeList.innerHTML = "";
      data.data.forEach((series) => {
        const animeLi = document.createElement("li");
        animeLi.className = "anime";
        const link = document.createElement("a");
        link.href = "https://animixreplay.to/anime.php?id=" + series.mal_id;
        link.title = "series.titles[4].title";
        animeLi.appendChild(link);
        const imageDiv = document.createElement("div");
        imageDiv.className = "searchimg";
        const poster = document.createElement("img");
        poster.className = "resultimg";
        poster.alt = "";
        poster.src = series.images.webp.image_url;
        imageDiv.appendChild(poster);
        const timeDiv = document.createElement("div");
        timeDiv.className = "timetext";
        timeDiv.textContent = series.aired.from.substring(0,10);
        imageDiv.appendChild(timeDiv);
        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating";
        ratingDiv.textContent = series.score;
        imageDiv.appendChild(ratingDiv);
        link.appendChild(imageDiv);
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";
        const nameP = document.createElement("p");
        nameP.className = "name";
        nameP.textContent = series.titles[0].title;
        detailsDiv.appendChild(nameP);
        const infoP = document.createElement("p");
        infoP.className = "infotext";
        infoP.textContent = "Movie";
        detailsDiv.appendChild(infoP);
        link.appendChild(detailsDiv);
        animeList.appendChild(animeLi);
      });
    });
});
loadButton.addEventListener("click", function () {
  console.log("Loadmore Load");
  page++;
  var limit = 24;
  fetch(
    `https://api.jikan.moe/v4/top/anime?type=${type}&filter=${filter}&page=${page}&limit=${limit}`
  )
    .then((response) => response.json())
    .then((data) => {
      const animeList = document.getElementById("homepage");
      data.data.forEach((series) => {
        const animeLi = document.createElement("li");
        animeLi.className = "anime";
        const link = document.createElement("a");
        link.href = "https://animixreplay.to/anime.php?id=" + series.mal_id;
        link.title = series.titles.title;
        animeLi.appendChild(link);
        const imageDiv = document.createElement("div");
        imageDiv.className = "searchimg";
        const poster = document.createElement("img");
        poster.className = "resultimg";
        poster.alt = "";
        poster.src = series.images.jpg.image_url;
        imageDiv.appendChild(poster);
        const timeDiv = document.createElement("div");
        timeDiv.className = "timetext";
        timeDiv.textContent = series.aired.from.substring(0,10);
        imageDiv.appendChild(timeDiv);
        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating";
        ratingDiv.textContent = series.score;
        imageDiv.appendChild(ratingDiv);
        link.appendChild(imageDiv);
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";
        const nameP = document.createElement("p");
        nameP.className = "name";
        nameP.textContent = series.title_english;
        detailsDiv.appendChild(nameP);
        const infoP = document.createElement("p");
        infoP.className = "infotext";

        infoP.textContent =
          series.season + " " + series.year + " " + series.type;

        detailsDiv.appendChild(infoP);
        link.appendChild(detailsDiv);
        animeList.appendChild(animeLi);
      });
    });
});

var deferredPrompt,
  notFoundID = {},
  gID = function (e) {
    var t = document.getElementById(e);
    return (
      null === t &&
        (void 0 === notFoundID[e]
          ? ((t = document.createElement("div")), (notFoundID[e] = t))
          : (t = notFoundID[e])),
      t
    );
  },
  notFoundClass = {},
  gClass = function (e) {
    var t = document.getElementsByClassName(e);
    return (
      void 0 === t[0] &&
        (void 0 === notFoundClass[e]
          ? ((t = [document.createElement("div")]), (notFoundClass[e] = t))
          : (t = notFoundClass[e])),
      t
    );
  };

function isJson(e) {
  try {
    JSON.parse(e);
  } catch (e) {
    return !1;
  }
  return !0;
}
