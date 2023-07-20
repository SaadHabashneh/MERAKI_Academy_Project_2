// selecting body:-

const body = $("body");

// declaring needed variables:-

// selecting nav buttons:-

const homeBtn = $("#homeBtn");
const favBtn = $("#favs");
const genreBtn = $("#genreBtn");
const topBtn = $("#topRated");
const searchBtn = $("#searchBtn");

// selecting search bar:-

const searchInput = $("#searchBar");

// selecting genre div and buttons:-

const genreDiv = $("#genreDiv");
genreDiv.hide();

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

// selecting login, register divs, their buttons and their forms:-

const loginDiv = $("#loginDiv");
loginDiv.hide();

const regDiv = $("#regDiv");
regDiv.hide();

const toLoginBtn = $("#navLogin");
const toRegBtn = $("#navReg");
const loginForm = $("#loginForm");
const regForm = $("#regForm");
const loginValidationDiv = $("#loginValidationDiv");
loginValidationDiv.hide();
const regValidationDiv = $("#regValidationDiv");
regValidationDiv.hide();

const loginEmail = $("#loginEmail");
const loginPass = $("#loginPass");
const loginBtn = $("#loginBtn");
const loginMsg = $("#loginMsg");

const regEmail = $("#regEmail");
const regPass = $("#regPass");
const regBtn = $("#regBtn");
const regMsg = $("#regMsg");

// creating needed divs:-

// fav movies div:-

const favDiv = $(`<div id="favMovies"></div>`);
body.append(favDiv);
favDiv.hide();

// description div:-

const descriptionDiv = $(`<div id="desDiv"></div>`);
body.append(descriptionDiv);

const descriptionTitle = $(`<h2 id="desTitle"></h2>`);
descriptionDiv.append(descriptionTitle);

const trailer = $(`<a id="trailer">Watch Trailer</a>`);
descriptionDiv.append(trailer);

const actors = $(`<strong id="actors" style="display: block"></strong>`);
descriptionDiv.append(actors);

const info = $(`<strong id="movieInfo" style="display: block"></strong>`);
descriptionDiv.append(info);

const addFavBtn = $(`<button class="favRemoveBtn">Add to favorites</button>`);
descriptionDiv.append(addFavBtn);
descriptionDiv.hide();

// movies data:-

const movies = [
    {
    id: 1,
    movieName: "Blade Runner 2049",
    actors: ["Harrison Ford", "Ryan Gosling", "Ana de Armas", "Dave Bautista"],
    imageSrc: "./images-icons/blade-runner.jpg",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    rate: 4,
    link: "https://www.youtube.com/watch?v=gCcx85zbxz4",
    category:"Action",
    },
    {
    id: 2,
    movieName: "Extraction II",
    actors: ["Chris Hemsworth","Golshifteh Farahani","Adam Bessa","Tornike Gogrichiani",],
    imageSrc: "./images-icons/Extraction-2.jpg",
    description: "After barely surviving his grievous wounds from his mission in Dhaka, Bangladesh, Tyler Rake is back, and his team is ready to take on their next mission.",
    rate: 3.6,
    link: "https://www.youtube.com/watch?v=Y274jZs5s7s",
    category:"Action",
    },
    {
    id: 3,
    movieName: "John Wick: Chapter 4",
    actors: ["Keanu Reeves","Laurence Fishburne","George Georgiou","Lance Reddick",],
    imageSrc: "./images-icons/john-wick.jpg",
    description:"John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    rate: 4,
    link: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    category:"Action",
    },
    {
    id: 4,
    movieName: "Top Gun: Maverick",
    actors: ["Tom Cruise", "Jennifer Connelly", "Miles Teller", "Val Kilmer"],
    imageSrc: "./images-icons/top-gun-maverick.jpg",
    description:"After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    rate: 4.3,
    link: "https://www.youtube.com/watch?v=giXco2jaZ_4",
    category:"Action",
    },
    {
    id: 5,
    movieName: "Glass Onion",
    actors: ["Daniel Craig", "Edward Norton", "Kate Hudson", "Dave Bautista"],
    imageSrc: "./images-icons/glass-onions.jpg",
    description: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
    rate: 3.6,
    link: "https://www.youtube.com/watch?v=gj5ibYSz8C0",
    category:"Comedy",
    },
    {
    id: 6,
    movieName: "We're the Millers",
    actors: ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts", "Ed Helms"],
    imageSrc: "./images-icons/we're-the-millers.jpg",
    description: "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    rate: 3.5,
    link: "https://www.youtube.com/watch?v=0Vsy5KzsieQ",
    category: "Comedy",
    },
    {
    id: 7,
    movieName: "Puss in Boots: The Last Wish",
    actors: ["Antonio Banderas","Salma Hayek","Harvey Guillén","Florence Pugh",],
    imageSrc: "./images-icons/puss-in-boots.jpg",
    description: "When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.",
    rate: 4,
    link: "https://www.youtube.com/watch?v=RqrXhwS33yc",
    category:"Comedy",
    },
    {
    id: 8,
    movieName: "The Unbearable Weight of Massive Talent",
    actors: ["Nicolas Cage","Pedro Pascal","Tiffany Haddish","Sharon Horgan",],
    imageSrc: "./images-icons/unbearable-weight.jpg",
    description: "Moviestar Nick Cage is channeling his iconic characters as he's caught between a superfan and a CIA agent.",
    rate: 3.5,
    link: "https://www.youtube.com/watch?v=x2YHPZMj8r4",
    category:"Comedy",
    },
    {
    id: 9,
    movieName: "Insidious: The Red Door",
    actors: ["Ty Simpkins", "Patrick Wilson", "Rose Byrne", "Sinclair Daniel"],
    imageSrc: "./images-icons/insidious.jpg",
    description: "The Lamberts must go deeper into The Further than ever before to put their demons to rest once and for all.",
    rate: 3,
    link: "https://www.youtube.com/watch?v=ZuQuOnYnr3Q",
    category: "Horror",
    },
    {
    id: 10,
    movieName: "M3gan",
    actors: ["Allison Williams","Violet McGraw","Ronny Chieng","Amie Donald",],
    imageSrc: "./images-icons/m3gan.jpg",
    description: "A robotics engineer at a toy company builds a life-like doll that begins to take on a life of its own.",
    rate: 3.2,
    link: "https://www.youtube.com/watch?v=BRb4U99OU80",
    category: "Horror",
    },
    {
    id: 11,
    movieName: "Scream VI",
    actors: ["Courteney Cox","Melissa Barrera","Jenna Ortega","Jasmin Savoy Brown"],
    imageSrc: "./images-icons/scream-6.jpg",
    description: "In the next installment, the survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.",
    rate: 3.3,
    link: "https://www.youtube.com/watch?v=h74AXqw4Opc",
    category: "Horror",
    },
    {
    id: 12,
    movieName: "Terrifier 2",
    actors: ["Lauren LaVera","David Howard Thornton","Elliott Fullam","Sarah Voigt",],
    imageSrc: "./images-icons/terrifier-2.jpg",
    description: "After being resurrected by a sinister entity, Art the Clown returns to the timid town of Miles County where he targets a teenage girl and her younger brother on Halloween night.",
    rate: 3.1,
    link: "https://www.youtube.com/watch?v=6KkONLf_ZKU",
    category: "Horror",
    },
    {
    id: 13,
    movieName: "Oppenheimer",
    actors: ["Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr."],
    imageSrc: "./images-icons/oppenheimer.jpg",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    rate: 4,
    link: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    category: "Drama",
    },
    {
    id: 14,
    movieName: "Interstellar",
    actors: ["Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy",],
    imageSrc: "./images-icons/interstellar.jpg",
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    rate: 4.6,
    link: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    category: "Drama",
    },
    {
    id: 15,
    movieName: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    imageSrc: "./images-icons/the-shawshank.jpg",
    description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    rate: 4.8,
    link: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
    category: "Drama",
    },
    {
    id: 16,
    movieName: "Sound of Freedom",
    actors: ["Jim Caviezel", "Mira Sorvino", "Bill Camp", "Cristal Aparicio"],
    imageSrc: "./images-icons/sound-of-freedom.jpg",
    description: "The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from sex traffickers.",
    rate: 4.3,
    link: "https://www.youtube.com/watch?v=Rt0kp4VW1cI",
    category: "Drama",
    },
];
// for the `imageSrc` it can use an array of url/path

// creating home button function:-

const homeButton = () => {
    loginDiv.hide(250);
    regDiv.hide(250);
    descriptionDiv.hide(250);
    favDiv.hide(250);
    main.html("");
    main.show(250);
    renderData(movies);
};

homeBtn.on("click", homeButton);

// creating the fav movies function:- 

const renderFavMovies = ("click", () => {
    favDiv.html("");
    const favMovies = users[currentUserIndex].favorites;
    favMovies.forEach((movie, i) => {
        const favMovieCard = $(`<div class="movieCards"></div>`);
        const favMovieImg = $(`<img src="${movie.imageSrc}">`);
        favMovieCard.append(favMovieImg);
        const favMovieTitle = $(`<h4>${movie.movieName}</h4>`);
        favMovieCard.append(favMovieTitle);
        const favRate = $(`<div class="rating"></div>`);
        for (let i = 1; i <= 5; i++) {
            const favStar = $(`<span>☆</span>`);
            if (i <= Math.round(movie.rate)) {
                favStar.addClass("filled");
            }
            favRate.append(favStar);
        }
        favMovieCard.append(favRate);
        const favCategory = $(`<span>Category: ${movie.category}</span>`);
        favMovieCard.append(favCategory);
        const remBtn = $(`<button class="cardButtons">Remove</button>`);
        remBtn.on("click", () => {
            favMovies.splice(i, 1);
            users[currentUserIndex].favorites = favMovies;
            localStorage.setItem("users", JSON.stringify(users));
            renderFavMovies();
        });
        favMovieCard.append(remBtn);
        favDiv.append(favMovieCard);
    });
});

// creating fav movies button function:-

favBtn.on("click", () => {
    main.hide(250);
    descriptionDiv.hide(250);
    loginDiv.hide(250);
    regDiv.hide(250);
    renderFavMovies();
    favDiv.show(250);
});

// creating movie cards description button:-

const desButton = (i) => {
    main.hide(250);
    descriptionTitle.text(movies[i].movieName);
    trailer.attr("href", `${movies[i].link}`);
    trailer.attr("target", "_blank");
    info.text(`Description: ${movies[i].description}`);
    actors.text(`Actors: ${movies[i].actors.join(", ")}`);
    addFavBtn.off("click").on("click", () => {
        const favMovies = users[currentUserIndex].favorites;
        favMovies.push(movies[i]);
        users[currentUserIndex].favorites = favMovies;
        localStorage.setItem("users", JSON.stringify(users));
    });
    descriptionDiv.show(250);
};

// creating movies cards and their buttons:-

const renderData = (movies) => {
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
    const category = $(`<span>Category: ${movie.category}</span>`);
    movieCard.append(category);
    const desBtn = $(`<button class="cardButtons">See More</button>`);
    desBtn.on("click", () => desButton(i));
    movieCard.append(desBtn);
    main.append(movieCard);
    });
};

renderData(movies);

// creating genre buttons function:-

const genreButtons = () => {
    const addedCategories = [];
    movies.forEach((movie) => {
        if (!addedCategories.includes(movie.category)) {
            const btn = $(`<button class="genreBtns">${movie.category}</button>`);
            btn.on("click", () => {
                const wantedMovies = movies.filter(m => m.category === movie.category);
                main.html("");
                renderData(wantedMovies);
            });
            genreDiv.append(btn);
            addedCategories.push(movie.category);
        };
    });
};

genreButtons();

// creating top rated button function:-

const topMovies = () => {
    const topRated = movies.filter(movie => movie.rate >= 4);
    main.html("");
    renderData(topRated);
};

topBtn.on("click", topMovies);

// creating search button function:-

const searchButton = () => {
    const searchedMovies = movies.filter((movie) => movie.movieName.toLowerCase().includes(searchInput.val().toLowerCase().trim()));
    main.html("");
    renderData(searchedMovies); 
};

searchBtn.on("click", searchButton);

// creating to login form button function:-

const toLoginForm = () => {
    regDiv.hide(250);
    main.hide(250);
    descriptionDiv.hide(250);
    favDiv.hide(250);
    loginDiv.show(250);
};

toLoginBtn.on("click", toLoginForm);

// creating to register form button function:-

const toRegForm = () => {
    loginDiv.hide(250);
    main.hide(250);
    descriptionDiv.hide(250);
    favDiv.hide(250);
    regDiv.show(250);
};

toRegBtn.on("click", toRegForm);

// creating users array of objects:-

const users = JSON.parse(localStorage.getItem("users")) || [];

// creating registry button function:-

const registryBtn = (email, password) => {
    email = regEmail.val();
    password = regPass.val();
    if (email === "" || password === "") {
        regMsg.text("You must fill the input fields");
        regMsg.css("color", "red");
        regValidationDiv.show(200);
        return
    };
    const usersObj = {};
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email) {
            regMsg.text("Email is taken");
            regMsg.css("color", "red");
            regValidationDiv.show(200);
            return 
        };
    };
    usersObj.email = email
    usersObj.password = password
    usersObj.favorites = [];
    users.push(usersObj);
    localStorage.setItem("users", JSON.stringify(users));
    regMsg.text("Registration successful");
    regMsg.css("color", "green");
    regValidationDiv.show(200);
    setTimeout(() => {
        regDiv.hide(200);
        loginDiv.show(200);
    }, 1000);
};

regBtn.on("click", registryBtn);

// creating login check function:-

// creating a variable to store the index of the logged-in user:-

let currentUserIndex;

const loggingInBtn = (email, password) => {
    email = loginEmail.val();
    password = loginPass.val();
    if (email === "" || password === "") {
        loginMsg.text("You must fill the input fields");
        loginMsg.css("color", "red");
        loginValidationDiv.show(200);
        return
    };
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email && password === users[i].password) {
            currentUserIndex = i;
            loginMsg.text("Login successful");
            loginMsg.css("color", "green");
            loginValidationDiv.show(200);
            setTimeout(() => {
                loginDiv.hide(200);
                main.show(200);
                renderData(movies);
            }, 1000);
            return
        };
    };
    loginMsg.text("account doesn't exist, have you registered?");
    loginMsg.css("color", "red");
    loginValidationDiv.show(200);
};

loginBtn.on("click", loggingInBtn);