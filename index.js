// prikazivanje about dela
const aboutBtn = document.getElementById("aboutBtn");
const about = document.getElementById("about");
const aboaboutExitBtnut = document.getElementById("aboutExitBtn");

aboutBtn.addEventListener('click', function () {
    about.classList.toggle('open');
});
aboaboutExitBtnut.addEventListener('click', function () {
    about.classList.remove('open');
});

// prikazivanje education dela
const skillsBtn = document.getElementById("skillsBtn");
const skills = document.getElementById("skills");
const skillsExitBtn = document.getElementById("skillsExitBtn");

skillsBtn.addEventListener('click', function () {
    skills.classList.toggle('open');
});
skillsExitBtn.addEventListener('click', function () {
    skills.classList.remove('open');
});

// prikazivanje services dela
// const skillsBtn = document.getElementById("aboutBtn");
// const about = document.getElementById("about");
// const aboaboutExitBtnut = document.getElementById("aboutExitBtn");

// aboutBtn.addEventListener('click', function () {
//     about.classList.toggle('open');
// });
// aboaboutExitBtnut.addEventListener('click', function () {
//     about.classList.remove('open');
// });