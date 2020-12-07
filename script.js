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
const project1 = document.getElementById("proj1");
let projectInfo = [document.getElementById("projInfo1"), document.getElementById("projInfo2"), document.getElementById("projInfo3")];

const project2 = document.getElementById("proj2");

const project3 = document.getElementById("proj3");

const projects = document.getElementById("projects");

const revealInfo = (i) => { projectInfo[i].classList.toggle("visible") };

const  hideInfo = (i) => { projectInfo[i].classList.toggle("visible") };

const enterProj1 = () => { revealInfo(0) };
const enterProj2 = () => { revealInfo(1) };
const enterProj3 = () => { revealInfo(2) };

const leaveProj1 = () => { hideInfo(0) };
const leaveProj2 = () => { hideInfo(1) };
const leaveProj3 = () => { hideInfo(2) };

project1.addEventListener("mouseenter", enterProj1);
project1.addEventListener("mouseleave", leaveProj1);

project2.addEventListener("mouseenter", enterProj2);
project2.addEventListener("mouseleave", leaveProj2);

project3.addEventListener("mouseenter", enterProj3);
project3.addEventListener("mouseleave", leaveProj3);
