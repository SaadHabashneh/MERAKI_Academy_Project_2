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
    }
    else {
        genreDiv.show(250);
    }
};

genreBtn.on("click", genreSwitch);

// selecting main div:-

const main = $("main");

// selecting movies divs:-

const actionDiv = $("#actionM");

const comedyDiv = $("#comedyM");

const horrorDiv = $("#horrorM");

const dramaDiv = $("#dramaM");

// creating needed divs:-

// fav movies div:-


// each genre div:-

// action div:-



// comedy div:-



// horror div:-



// drama div:-



// top rated div:-



// searched div:-



// description div:-



// movies data:-

const actionMovies = [
{
    id: 1,
    movieName: "Sound of Freedom",
    actors: ["Jim Caviezel", "Mira Sorvino", "Bill Camp", "Cristal Aparicio"],
    imageSrc: "./images & icons/sound-of-freedom",
    description: "The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from sex traffickers.",
    rate: 4.3,
},
{
    id: 2,
    movieName: "Extraction II",
    actors: ["Chris Hemsworth", "Golshifteh Farahani", "Adam Bessa", "Tornike Gogrichiani"],
    imageSrc: "./images & icons/Extraction-2",
    description: "After barely surviving his grievous wounds from his mission in Dhaka, Bangladesh, Tyler Rake is back, and his team is ready to take on their next mission.",
    rate: 3.6,
},
{
    id: 3,
    movieName: "John Wick: Chapter 4",
    actors: ["Keanu Reeves", "Laurence Fishburne", "George Georgiou", "Lance Reddick"],
    imageSrc: "./images & icons/john-wick",
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    rate: 4,
},
{
    id: 4,
    movieName: " Top Gun: Maverick",
    actors: ["Tom Cruise", "Jennifer Connelly", "Miles Teller", "Val Kilmer"],
    imageSrc: "./images & icons/top-gun-maverick",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    rate: 4.3,
}
];
// for the `imageSrc` it can use an array of url/path


