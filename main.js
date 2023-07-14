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

// selecting main div:-

const main = $("main");

