/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


sections = [{name: "section1", isVisible: false}, {name: "section2", isVisible: false}, {name: "section3", isVisible: false}, {name: "section4", isVisible: false}];

function checkElementVisibility() {
    const visibleSection = sections.find((section) => {
        const ele = document.getElementById(section.name);
        const rect = ele.getBoundingClientRect();
        if( rect.top >= 0 && rect.left >= 0 ){
            return section;
        }
    });
    visibleSection && sections.forEach(section => {
        if (section.name === visibleSection.name) {
            section.isVisible = true;
        } else {
            section.isVisible = false;
        }
    })
}

window.addEventListener("scroll", checkElementVisibility);