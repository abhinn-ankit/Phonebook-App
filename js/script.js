/* SideBar toggle */
const NAVHEADER = document.querySelector(".navbar-header");
const TOGGLE = document.querySelector(".navbar-toggle");
const SEARCHBAR = document.querySelector(".input-field input");
const USERNAMEBTN = document.querySelector(".navbar-userinfo button");
const SIDENAV = document.querySelector("#mySidenav");
const SMALLSEARCHBTN = document.querySelector(".search-sm");
const SMALLSRCHBTN = document.querySelector(".small-search");
const SMALLSRCHP = document.querySelector(".navbar-search-btn p");
const sideNavLinks = document.querySelectorAll("#mySidenav a");
const contactBox = document.querySelector(".contact-box");

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
        document.querySelector(".main").style.marginLeft = "250px";
        contactBox.style.marginLeft = "250px";
        contactBox.style.width = "85%";
    }
    else {
        SIDENAV.style.width = window.innerWidth + "px";

        for (let i = 0 ; i < sideNavLinks.length ; i++ ) {
            sideNavLinks[i].style.textAlign = "center";
        }
    }
    TOGGLE.classList.toggle("change");
}

function closeNav() {
    SIDENAV.style.width = "0";
    document.querySelector(".main").style.marginLeft= "0";
    contactBox.style.marginLeft = "0";
    TOGGLE.classList.toggle("change");
    contactBox.style.width = "100%";
}

// Calculate width

window.addEventListener("load", searchWidth);
window.addEventListener("resize", searchWidth);

function searchWidth() {
    SEARCHBAR.style.width = 192 + (window.innerWidth - 800) + "px" ;
    if( window.innerWidth >= 800 ) {
        NAVHEADER.style.display = "inline-flex";
    }
    else if ( window.innerWidth < 800 && !smallSearch ) {
        NAVHEADER.style.display = "none";
    }
}

// Enter User name

USERNAMEBTN.addEventListener("click", userNamePopUp);
window.addEventListener("load", userNamePopUp);

function userNamePopUp() {
    userName = prompt("Please enter your name", "Default User");
    USERNAMEBTN.innerHTML = userName;
}

// Expand search bar

SMALLSEARCHBTN.addEventListener("click", expandSearchBar);
var smallSearch = true;

function expandSearchBar() {
    if(smallSearch) {
        SMALLSEARCHBTN.innerHTML = "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>";
        SMALLSEARCHBTN.style.marginTop = "3px";
        smallSearch = false;
        SMALLSRCHBTN.style.display = "inline-flex";
        NAVHEADER.style.display = "none";
        SMALLSRCHP.style.flex = "0 1 auto";
    }
    else {
        minimizeSearchBar();
    }

}

SMALLSRCHBTN.addEventListener("blur", keepSearchBar);

function keepSearchBar(e) {

    minimizeSearchBar();
}

function minimizeSearchBar(){
    SMALLSEARCHBTN.innerHTML = "<i class=\"fa fa-search\" aria-hidden=\"true\"></i>";
    smallSearch = true;
    SMALLSRCHBTN.style.display = "none";
    NAVHEADER.style.display = "inline-flex";
    SMALLSRCHP.style.flex = "auto";
    SMALLSEARCHBTN.style.marginTop = "0px";

}

