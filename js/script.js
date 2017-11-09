/* SideBar toggle */
const NAVHEADER = document.querySelector(".navbar-header");
const TOGGLE = document.querySelector(".navbar-toggle");
const SEARCHBAR = document.querySelector(".input-field > input");
const USERNAMEBTN = document.querySelector(".navbar-userinfo button");
const SIDENAV = document.querySelector("#mySidenav");
const SMALLSEARCHBTN = document.querySelector(".search-sm");
const SMALLSRCHBTN = document.querySelector(".small-search");
const SMALLSRCHP = document.querySelector(".navbar-search-btn p");


const searchBarColor = SEARCHBAR.style.backgroundColor;
var openNavbar = true;
var userName;

TOGGLE.addEventListener("click", function () {
    if(openNavbar === true) {
        openNavbar = false;
        openNav();
    }
    else {
        openNavbar = true;
        closeNav();
    }
});

function openNav() {
    if(window.innerWidth > 800) {
        SIDENAV.style.width = "250px";
        //document.getElementById("main").style.marginLeft = "250px";
    }
    else {
        SIDENAV.style.width = window.innerWidth + "px";
        // noinspection JSAnnotator
        let sideNavLinks = document.querySelectorAll("#mySidenav a");
        // noinspection JSAnnotator
        for (let i = 0 ; i < sideNavLinks.length ; i++ ) {
            sideNavLinks[i].style.textAlign = "center";
        }
    }
    TOGGLE.classList.toggle("change");
}

function closeNav() {
    SIDENAV.style.width = "0";
    //document.getElementById("main").style.marginLeft= "0";
    TOGGLE.classList.toggle("change");
}

// Calculate width

window.addEventListener("load", searchWidth);
window.addEventListener("resize", searchWidth);

function searchWidth() {
    SEARCHBAR.style.width = 192 + (window.innerWidth - 800) + "px" ;
}

// Enter User name

USERNAMEBTN.addEventListener("click", userNamePopUp);
window.addEventListener("load", userNamePopUp);

function userNamePopUp() {
    userName = prompt("Please enter your name", "Default User");
    USERNAMEBTN.innerHTML = userName;
}

// SearchBar color change

SEARCHBAR.addEventListener("focus", searchWColor)

function searchWColor() {
    SEARCHBAR.style.backgroundColor = "#FFF";
}

SEARCHBAR.addEventListener("blur", searchWoColor);

function searchWoColor() {
    SEARCHBAR.style.backgroundColor = searchBarColor;
}

// Expand search bar

SMALLSEARCHBTN.addEventListener("click", expandTimes);
var smallSearch = true;

function expandTimes() {
    if(smallSearch) {
        SMALLSEARCHBTN.innerHTML = "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>";
        smallSearch = false;
        SMALLSRCHBTN.style.display = "inline-flex";
        NAVHEADER.style.display = "none";
        SMALLSRCHP.style.flex = "0 1 auto";
    }
    else {
        smallSearch = true;
        SMALLSEARCHBTN.innerHTML = "<i class=\"fa fa-search\" aria-hidden=\"true\"></i>";
        SMALLSRCHBTN.style.display = "none";
        NAVHEADER.style.display = "inline-flex";
        SMALLSRCHP.style.flex = "auto";
    }

}

SMALLSEARCHBTN.addEventListener("blur", expandSearch);

function expandSearch(){
    SMALLSEARCHBTN.innerHTML = "<i class=\"fa fa-search\" aria-hidden=\"true\"></i>";
    smallSearch = true;
    SMALLSRCHBTN.style.display = "none";
    NAVHEADER.style.display = "inline-flex";
    SMALLSRCHP.style.flex = "auto";
}
/*  */