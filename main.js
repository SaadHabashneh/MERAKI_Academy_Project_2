/*
the page loads on a 3 divs, header, nav & main, the header and nav are,
fixed and the nav has 3 buttons and a search bar with its button and a,
dark mode toggle button,the main has divs for as many movie cards i put,
each one has 4 movie cards the buttons on the header are a home button,
that returns him to hom div where ever the user are and a favMovies button,
that shows the fav movies div that has the user's added movies and a,
genre button that shows a small div that has buttons for each genre and,
each button shows a div and that div's content depends on what button got,
clicked and right to them a search bar that lets the user type the movie,
he is searching for and when he selects a movie and presses the button,
next to the search bar a new div shows with that movie only on it, on the,
main div there are divs that hold 4 cards and they are flexed together,
and in the user fav movies there is a after every movie that removes that,
movie from his fav movies div, and if you click on the button under each,
movie it shows a div with info about the movie including trailer link and,
a description about it and the actors and a button that adds the movie to,
the user's favMovies div.
*/

// selecting body:-

const body = $("body");

// declaring needed variables:-

// selecting nav buttons:-

const homeBtn = $("#homeBtn");
const favBtn = $("#favs");
const genreBtn = $("#genreBtn");
const topBtn = $("#topRated");
const dark = $("#darkButton");
const searchBtn = $("#searchBtn");

// selecting genre div and buttons:-

const genreDiv = $("#genreDiv");
genreDiv.hide();

const actionBtn = $("#action");
const comedyBtn = $("#comedy");
const horrorBtn = $("#horror");
const dramaBtn = $("#drama");

// making the genre button function:-

const genreSwitch = () => {
    if (genreDiv.is(":visible")) {
    genreDiv.hide(250);
    } else {
    genreDiv.show(250);
    }
};

genreBtn.on("click", genreSwitch);

// selecting main div:-

const main = $("main");

// creating needed divs:-

// fav movies div:-

const favDiv = $(`<div id="favMovies"></div>`);
body.append(favDiv);
favDiv.hide();

// each genre function:-

// action button function:-

// comedy button function:-

// horror button function:-

// drama button function:-

// top rated div:-
const topRated = $(`<div id="topDiv"></div>`);
body.append(topRated);
topRated.hide();

// searched div:-

// description div:-

const descriptionDiv = $(`<div id="desDiv"></div>`);
body.append(descriptionDiv);

const descriptionTitle = $(`<h2 id="desTitle"></h2>`);
descriptionDiv.append(descriptionTitle);

const trailer = $(`<a id="trailer">Watch Trailer</a>`);
descriptionDiv.append(trailer);

const actors = $(`<strong id="actors"></strong>`);
descriptionDiv.append(actors);

const info = $(`<p id="movieInfo"></p>`);
descriptionDiv.append(info);

const addFavBtn = $(`<button class="favDeleteBtn">Add to favorites</button>`);
descriptionDiv.append(addFavBtn);
descriptionDiv.hide();

// movies data:-

const movies = [
    {
    id: 1,
    movieName: "Sound of Freedom",
    actors: ["Jim Caviezel", "Mira Sorvino", "Bill Camp", "Cristal Aparicio"],
    imageSrc: "./images-icons/sound-of-freedom",
    description:"The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from sex traffickers.",
    rate: 4.3,
    link: "https://www.youtube.com/watch?v=Rt0kp4VW1cI",
    category:"Action",
    },
    {
    id: 2,
    movieName: "Extraction II",
    actors: ["Chris Hemsworth","Golshifteh Farahani","Adam Bessa","Tornike Gogrichiani",],
    imageSrc: "./images-icons/Extraction-2",
    description:"After barely surviving his grievous wounds from his mission in Dhaka, Bangladesh, Tyler Rake is back, and his team is ready to take on their next mission.",
    rate: 3.6,
    link: "https://www.youtube.com/watch?v=Y274jZs5s7s",
    category:"Action",
    },
    {
    id: 3,
    movieName: "John Wick: Chapter 4",
    actors: ["Keanu Reeves","Laurence Fishburne","George Georgiou","Lance Reddick",],
    imageSrc: "./images-icons/john-wick",
    description:"John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    rate: 4,
    link: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    category:"Action",
    },
    {
    id: 4,
    movieName: "Top Gun: Maverick",
    actors: ["Tom Cruise", "Jennifer Connelly", "Miles Teller", "Val Kilmer"],
    imageSrc: "./images-icons/top-gun-maverick",
    description:"After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    rate: 4.3,
    link: "https://www.youtube.com/watch?v=giXco2jaZ_4",
    category:"Action",
    },
    {
    id: 5,
    movieName: "Glass Onion",
    actors: ["Daniel Craig", "Edward Norton", "Kate Hudson", "Dave Bautista"],
    imageSrc: "./images-icons/glass-onions",
    description: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
    rate: 3.6,
    link: "https://www.youtube.com/watch?v=gj5ibYSz8C0",
    category:"comedy",
    },
    {
    id: 6,
    movieName: "We're the Millers",
    actors: ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts", "Ed Helms"],
    imageSrc: "./images-icons/we're-the-millers",
    description:"A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    rate: 3.5,
    link: "https://www.youtube.com/watch?v=0Vsy5KzsieQ",
    category: "comedy",
    },
    {
    id: 7,
    movieName: "Puss in Boots: The Last Wish",
    actors: ["Antonio Banderas","Salma Hayek","Harvey Guillén","Florence Pugh",],
    imageSrc: "./images-icons/puss-in-boots",
    description:"When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.",
    rate: 4,
    link: "https://www.youtube.com/watch?v=RqrXhwS33yc",
    category:"comedy",
    },
    {
    id: 8,
    movieName: "The Unbearable Weight of Massive Talent",
    actors: ["Nicolas Cage","Pedro Pascal","Tiffany Haddish","Sharon Horgan",],
    imageSrc: "./images-icons/unbearable-weight",
    description:"Moviestar Nick Cage is channeling his iconic characters as he's caught between a superfan and a CIA agent.",
    rate: 3.5,
    link: "https://www.youtube.com/watch?v=x2YHPZMj8r4",
    category:"comedy",
    },
    {
    id: 9,
    movieName: "Insidious: The Red Door",
    actors: ["Ty Simpkins", "Patrick Wilson", "Rose Byrne", "Sinclair Daniel"],
    imageSrc: "./images-icons/insidious",
    description:"The Lamberts must go deeper into The Further than ever before to put their demons to rest once and for all.",
    rate: 3,
    link: "https://www.youtube.com/watch?v=ZuQuOnYnr3Q",
    category: "horror",
    },
    {
    id: 10,
    movieName: "M3gan",
    actors: ["Allison Williams","Violet McGraw","Ronny Chieng","Amie Donald",],
    imageSrc: "./images-icons/m3gan",
    description:"A robotics engineer at a toy company builds a life-like doll that begins to take on a life of its own.",
    rate: 3.2,
    link: "https://www.youtube.com/watch?v=BRb4U99OU80",
    category: "horror",
    },
    {
    id: 11,
    movieName: "Scream VI",
    actors: ["Courteney Cox","Melissa Barrera","Jenna Ortega","Jasmin Savoy Brown"],
    imageSrc: "./images-icons/scream-6",
    description:"In the next installment, the survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.",
    rate: 3.3,
    link: "https://www.youtube.com/watch?v=h74AXqw4Opc",
    category: "horror",
    },
    {
    id: 12,
    movieName: "Terrifier 2",
    actors: ["Lauren LaVera","David Howard Thornton","Elliott Fullam","Sarah Voigt",],
    imageSrc: "./images-icons/terrifier-2",
    description:"After being resurrected by a sinister entity, Art the Clown returns to the timid town of Miles County where he targets a teenage girl and her younger brother on Halloween night.",
    rate: 3.1,
    link: "https://www.youtube.com/watch?v=6KkONLf_ZKU",
    category: "horror",
    },
    {
    id: 13,
    movieName: "Oppenheimer",
    actors: ["Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr."],
    imageSrc: "./images-icons/oppenheimer",
    description:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    rate: 4,
    link: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    category: "drama",
    },
    {
    id: 14,
    movieName: "Interstellar",
    actors: ["Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy",],
    imageSrc: "./images-icons/interstellar",
    description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    rate: 4.6,
    link: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    category: "drama",
    },
    {
    id: 15,
    movieName: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    imageSrc: "./images-icons/the-shawshank",
    description:"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    rate: 4.8,
    link: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
    category: "drama",
    },
    {
    id: 16,
    movieName: "Blade Runner 2049",
    actors: ["Harrison Ford", "Ryan Gosling", "Ana de Armas", "Dave Bautista"],
    imageSrc: "./images-icons/blade-runner",
    description:"Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    rate: 4,
    link: "https://www.youtube.com/watch?v=gCcx85zbxz4",
    category: "drama",
    },
];
// for the `imageSrc` it can use an array of url/path

// creating description button:-

const desButton = (i) => {
    descriptionTitle.text(movies[i].movieName);
    trailer.attr("href", `${movies[i].link}`);
    actors.text(`Actors: ${movies[i].actors.join(", ")}`);
    info.text(movies[i].description);
    descriptionDiv.show();
};

// creating movies cards and their buttons:-
const renderData = () => {
    movies.forEach((movie, i) => {
    const movieCard = $(`<div class="movieCards"></div>`);
    const movieImg = $(`<img src="${movie.imageSrc}">`);
    movieCard.append(movieImg);
    const movieTitle = $(`<h4>${movie.movieName}</h4>`);
    movieCard.append(movieTitle);
    const rating = $(`<div class="rating"></div>`);
    for (let i = 1; i <= 5; i++) {
        const star = $(`<span>☆</span>`);
        if (i <= Math.round(movie.rate)) {
        star.addClass("filled");
        }
        rating.append(star);
    }
    movieCard.append(rating);
    const category = $(`<span>Category: ${movie.category}</span>`)
    movieCard.append(category);
    const desBtn = $(`<button class="cardButtons">See More</button>`);
    desBtn.on("click", () => desButton(i));
    movieCard.append(desBtn);
    main.append(movieCard);
    });
};

renderData();

