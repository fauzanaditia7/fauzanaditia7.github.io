var toggle = document.querySelector("#toggle");
var iconToggle = document.querySelector(".icon-toggle");
var parentHTML = document.querySelector("html");
var toggleText = document.querySelector(".toggleText");
var placeholderCard = document.querySelectorAll(".placeholder");
var upBtn = document.querySelector("#upBtn");

const setIcon = c => {
    if (c == "light") {
        iconToggle.classList.add("fa-moon");
        iconToggle.classList.remove("fa-sun");
        toggleText.innerText = "Dark Mode";
    } else {
        iconToggle.classList.add("fa-sun");
        iconToggle.classList.remove("fa-moon");
        toggleText.innerText = "Light Mode";
    }
};

toggle.addEventListener("click", () => {
    const setF = (parentHTML.getAttribute("data-bs-theme") == "dark") ? "light" : "dark";
    setIcon(setF);
    parentHTML.setAttribute("data-bs-theme", setF)
    localStorage.setItem("color-scheme", setF)
});

$(document).ready(() => {
    const isSetColor = localStorage.getItem('color-scheme') === 'dark';
    if (!(isSetColor)) {
        parentHTML.setAttribute("data-bs-theme", "light");
        setIcon("light");
    } else {
        parentHTML.setAttribute("data-bs-theme", "dark");
        setIcon("dark");
    }
    placeholderCard.forEach((e) => {
        setTimeout(() => {
            e.classList.remove("placeholder")
        }, 2000);
    });
});

const scrollFunction = a => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        return a.style.display = "flex"
    }
    return a.style.display = "none"
};
window.onscroll = a => {scrollFunction(upBtn)};

upBtn.addEventListener("click", () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$("form:not(#contact-form)").on("submit", e => {
    e.preventDefault();
    alert('Masih belum bisa cuy !!');
});