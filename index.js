// prikazivanje about dela
const aboutText = document.getElementById("aboutText");
const aboutBtn = document.getElementById("aboutBtn");
const about = document.getElementById("about");

about.addEventListener('click', function () {
    const isOpen = aboutText.classList.toggle('show');

    if (isOpen) {
        aboutBtn.style.transform = "rotate(180deg)";
    } else {
        aboutBtn.style.transform = "rotate(0deg)";
    }
    aboutBtn.style.transition = "transform 0.5s ease";
});


// prikazivanje myservice dela
const myServicesDivContainer = document.getElementById("myServicesDivContainer");
const myServiceBtn = document.getElementById("myServiceBtn");
const myServicesHeader = document.getElementById("myServicesHeader");

myServicesHeader.addEventListener('click', function () {
    const isOpen = myServicesDivContainer.classList.toggle('open');

    if (isOpen) {
        myServiceBtn.style.transform = "rotate(-180deg)";
    } else {
        myServiceBtn.style.transform = "rotate(0deg)";
    }
    myServiceBtn.style.transition = "transform 0.5s ease";
});

// prikazivanje contact dela
const contact = document.getElementById("contact");
const contactSpan = document.getElementById("contactSpan");
const contactBtn = document.getElementById("contactBtn");

contact.addEventListener('click', function () {
    const isOpen = contactSpan.classList.toggle('open');
    if (isOpen) {
        contactBtn.style.transform = "rotate(180deg)";

    } else {
        contactBtn.style.transform = "rotate(0deg)";
    }
    contactBtn.style.transition = "transform 0.5s ease";
});

// prikaz personal card dela
const imeFooter = document.getElementById("imeFooter");
const personalCardContainer = document.getElementById("personalCardContainer");
const personalCardExitBtn = document.getElementById("personalCardExitBtn");

imeFooter.addEventListener("click", () => {
    personalCardContainer.classList.toggle('open');
})

personalCardExitBtn.addEventListener("click", () => {
    personalCardContainer.classList.remove('open');
})

// prikaz personal design page
const designPage = document.getElementById("designPage");
const designBtn = document.getElementById("designBtn");
const designExitBtn = document.getElementById("designExitBtn");

designBtn.addEventListener("click", () => {
    designPage.classList.toggle('open');
})

designExitBtn.addEventListener("click", () => {
    designPage.classList.remove('open');
})

// prikaz personal tools page
const toolsPage = document.getElementById("toolsPage");
const toolsBtn = document.getElementById("toolsBtn");
const toolsExitBtn = document.getElementById("toolsExitBtn");

toolsBtn.addEventListener("click", () => {
    toolsPage.classList.toggle('open');
})

toolsExitBtn.addEventListener("click", () => {
    toolsPage.classList.remove('open');
})

// prikaz personal development page
const developmentPage = document.getElementById("developmentPage");
const developomentBtn = document.getElementById("developmentBtn");
const developmentExitBtn = document.getElementById("developmentExitBtn");

developomentBtn.addEventListener("click", () => {
    developmentPage.classList.toggle('open');
})

developmentExitBtn.addEventListener("click", () => {
    developmentPage.classList.remove('open');
})