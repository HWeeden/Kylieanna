/*const tabs = document.querySelectorAll(`[data-tab-target]`)
const tabContents = document.querySelectorAll(`[data-tab-content]`)

tabs.forEach(tab => {
  tab.addEventListener(`click`, () => {
    const target = document.querySelector(tab.dataset.tabTarget)
   tabContents.forEach(tabContent => {
    tabContent.classlist.remove(`active`)
   })
   tabs.forEach(tab => {
    tab.classList.remove(`active`)
   })
   tab.classList.add(`active`)
    target.classlist.add(`active`)
  })
}) */


function openPage(pageName, elmnt, color) {
// Hide all elements with class="tabcontent" by default 
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

// Remove the background color of all tablinks/buttons
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}

// Show the specific tab content
document.getElementById(pageName).style.display = "block";

// Add the specific color to the button used to open the tab content
elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openSubPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
  }
  
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
  tablinks[i].style.backgroundColor = "";
  }
  
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




/*


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); 

tablinks = document.getElementsByClassName("tablinks"); 
for (i = 0; i < tablinks.length; i++) { 
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(tabName).style.display = "block"; 
evt.currentTarget.className += " active"; */