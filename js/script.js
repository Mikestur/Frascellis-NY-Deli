const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// Toggles the nav bar hamburger button to display, horizontal links to display in column and toggles the active class in CSS
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})




// This menu function was scrapped as I started to late on it. What I need script to do. I need to hide all the menu divs (done in CSS initially) on the elements page except the starting Appetizer which should be visible on menu startup. I then need it to show the div containing the section of the menu that is clicked. After this click I need it to hide the current displayed div and show the requested div.  For that I need the ID of the element to be displayed. 









