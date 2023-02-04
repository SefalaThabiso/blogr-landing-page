const navButton = document.querySelector("[data-toggle-button]");
const navigation = document.querySelector("[data-nav]");
const dropDownMenu = [...document.getElementsByClassName("dropDown-Menu")];
const dropDown = document.querySelector("[data-links]");
const hamburgerMenuIcon = document.getElementById("hamburger-menu-icon");
const closeMenuIcon = document.getElementById("close-menu-icon");

navButton.addEventListener("click", () => {
  navigation.classList.toggle("visible");

  if (navigation.classList.contains("visible")) {
    hamburgerMenuIcon.classList.remove("visible");
    closeMenuIcon.classList.add("visible");
  } else {
    hamburgerMenuIcon.classList.add("visible");
    closeMenuIcon.classList.remove("visible");
  }
});

dropDownMenu.forEach((dropmenu) => {
  dropmenu.addEventListener("click", () => {
    dropDown.classList.toggle("visible");
  });
});
