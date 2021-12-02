// Global variables
sections = [];

// Function to check element visibility
function checkElementVisibility() {
    sections.forEach(section => {
        section.classList.remove("active__section");
    })
    const visibleSection = sections.find((section, index) => {
        const ele = document.getElementById(section.id);
        const rect = ele && ele.getBoundingClientRect();
        if( rect && rect.top >= 0 && rect.left >= 0 ){
            section.classList.add("active__section");
            return section;
        }
        else if (sections.length == index + 1) {
            section.classList.add("active__section");
            return section;
        }
    });
    removeActiveClassFromNav();
    targetActiveNavId = visibleSection && visibleSection.id + "-link";
    let targetActiveNavEle = document.getElementById(targetActiveNavId);
    targetActiveNavEle && targetActiveNavEle.classList.add("active");
}

// Function to remove active class from nav-link
function removeActiveClassFromNav() {
    const currentActiveEle = document.querySelector(`.active`);
    currentActiveEle && currentActiveEle.classList.remove(`active`);
}

// Function to scroll to section of the page
function scrollToSection(event) {
    const scrollToId = event.target.getAttribute('scroll-to');
    const scrollToNavId = scrollToId + "-link";
    let scrollToNavEle = document.getElementById(scrollToNavId);
    const scrollToEle = document.getElementById(scrollToId);
    scrollToEle.scrollIntoView({ behavior: "smooth" });
}

// Function to generate nav elements based on available sections
function generateNavElements(sectionNames) {
    let docFragment = document.createDocumentFragment();
    sectionNames && sectionNames.forEach((sectionName, index) => {
        let listEle = document.createElement('li');
        listEle.id = `${sectionName+'-link'}`;
        listEle.innerText = `${sectionName}`;
        listEle.className = (index === 0) ? 'sectionLink active' : 'sectionLink';
        listEle.setAttribute('scroll-to', sectionName);
        listEle.addEventListener('click', scrollToSection);
        docFragment.appendChild(listEle);
    });
    let navbar = document.getElementById("navbar__list");
    navbar.appendChild(docFragment);
}

// Function to identify sections of the page
function identifySections() {
    sections = [...document.getElementsByTagName('section')];
    const sectionNames = sections.map(section => {
        return section.id;
    })
    generateNavElements(sectionNames);
}

function scrollToTop(){
    const pageHeader =  document.getElementById("heading");
    pageHeader && pageHeader.scrollIntoView({ behavior: "smooth" });
}

// execution begins here
identifySections();
window.addEventListener("scroll", checkElementVisibility);