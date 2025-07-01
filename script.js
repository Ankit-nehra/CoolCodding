// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
let images = document.getElementById("images");
let profile = document.getElementById("profile");
let login_btn = document.getElementById("login");
let Singup_btn = document.getElementById("Singup");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

/* ------------------------------------------------- image slider ---------------------------*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


const fetchData = async () => {
  let res = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=ba867d09eb5f45c3922e283768b570e0');
  let data = await res.json();
  images.innerHTML = data.results.map((result) => {
    return (`
    <div class="column">
      <img src="${result.image}" alt="images">
      <p>${result.title}</p>
    </div>
    `)
  }).join('');
}
fetchData();

const openProfile = () => {
  login_btn.classList.remove("hidden");
  login_btn.focus();
};

const closeProfile = () => {
  login_btn.classList.add("hidden");
};

login_btn.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProfile();
  }
});

profile.addEventListener("click", openProfile);

const openSingup = () => {
  Singup_btn.classList.remove("hidden");
  Singup_btn.focus();
  console.log("hello");
};

const closeSignup = () => {
  Singup_btn.classList.add("hidden");
};

Singup_btn.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSignup();
  }
});

Singup_btn.addEventListener("click", openSingup);



