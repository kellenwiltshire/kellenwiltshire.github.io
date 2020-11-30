//NAVBAR
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

//PROJECTS
var project1 = document.getElementById("proj1");
var projectInfo = [document.getElementById("projInfo1"), document.getElementById("projInfo2"), document.getElementById("projInfo3")];

var project2 = document.getElementById("proj2");
// var projectInfo2 = document.getElementById("projInfo2")

var project3 = document.getElementById("proj3");
// var projectInfo3 = document.getElementById("projInfo3")

var projects = document.getElementById("projects");

function revealInfo(i){
    projectInfo[i].classList.toggle("visible");
}

function hideInfo(i){
    projectInfo[i].classList.toggle("visible");
}

function enterProj1() {
    revealInfo(0);
}

function leaveProj1() {
    hideInfo(0);
}

function enterProj2() {
    revealInfo(1);
}

function leaveProj2() {
    hideInfo(1);
}

function enterProj3() {
    revealInfo(2);
}

function leaveProj3() {
    hideInfo(2);
}

project1.addEventListener("mouseenter", enterProj1);
project1.addEventListener("mouseleave", leaveProj1);

project2.addEventListener("mouseenter", enterProj2);
project2.addEventListener("mouseleave", leaveProj2);

project3.addEventListener("mouseenter", enterProj3);
project3.addEventListener("mouseleave", leaveProj3);
