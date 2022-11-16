// remove loading page
function loadingPage() {
    document.getElementById("loading").style.display = "none";
}

window.onload = function () {
    setTimeout(loadingPage, 3000)
}



var serviceSection = document.getElementById("serv");
var progressBars = document.querySelectorAll(".prog-bar");
// adding progress bars animation
function addProgress() {
    progressBars[0]
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.prog;
        progressBar.style.opacity = 1;
        progressBars[0].classList.add("theanimation");
        progressBars[1].classList.add("theanimation1");
        progressBars[2].classList.add("theanimation2");
        progressBars[3].classList.add("theanimation3");
    })
}

// remove progress bars animation
function removeProgress() {
    progressBars[0]
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.prog;
        progressBar.style.opacity = 0;
        progressBars[0].classList.remove("theanimation");
        progressBars[1].classList.remove("theanimation1");
        progressBars[2].classList.remove("theanimation2");
        progressBars[3].classList.remove("theanimation3");
    })
}
// scrollspy function
var MySections = document.querySelectorAll(".section");
var navLinks = document.querySelectorAll(".nav-link");
function scrollSpy() {
    MySections.forEach(section => {
        var top = window.scrollY;
        var theoffset = section.offsetTop - 250;
        var height = section.offsetHeight;
        var sectionId = section.getAttribute('id');

        if (top >= theoffset && top < theoffset + height) {
            navLinks.forEach(linK => {
                linK.classList.remove("active-link");
                document.querySelector('div nav a[href*=' + sectionId + ']').classList.add("active-link");
            });
        };
    });
};
// go to top function
const mybutton = document.getElementById("myBtn");
function scrollToTopFunction() {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop > 400) {
        mybutton.classList.remove("hide");
        mybutton.classList.add("view");
    } else {
        mybutton.classList.remove("view");
        mybutton.classList.add("hide");
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

// scroll animation 

window.onscroll = function () {
    scrollFunction();
    scrollToTopFunction();
    // scrollFunction();
    const servicePosition = serviceSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (servicePosition <= screenPosition) {
        addProgress();
    } else {

        removeProgress();
    }
    scrollSpy();
};
// sticky navigation bar
var head = document.getElementById("NavBar");
function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        head.classList.add("fixed");
    } else {
        head.classList.remove("fixed");
        console.log("scroll back");
    }
}


// open and close the nav bar
function viewMenue() {
    document.getElementById("navBar").classList.remove("hiden2");
    document.getElementById("navBar").classList.add("visible2");
}
function viewbackground() {
    document.getElementById("black").classList.remove("hiden");
    document.getElementById("black").classList.add("visible");
}
function deleteMenue() {
    document.getElementById("navBar").classList.remove("visible2");
    document.getElementById("navBar").classList.add("hiden2");
}
function deletebackground() {
    document.getElementById("black").classList.remove("visible");
    document.getElementById("black").classList.add("hiden");
}
document.getElementById("openMenue").onclick = function () {

    viewbackground();
    setTimeout(viewMenue, 500)
}
document.getElementById("closeTheNav").onclick = function () {
    deleteMenue();
    setTimeout(deletebackground, 500)
}
var navigationLinks = document.getElementsByClassName("nav-link");
for (var i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].onclick = function () {
        deleteMenue();
        setTimeout(deletebackground, 500);
    }
}
// open the video 
document.getElementById("playVid").onclick = function () {
    document.getElementById("ourVid").classList.remove("remove");
    document.getElementById("ourVid").classList.add("active");
    document.body.classList.add("remove-scroll");
}
// close the video
function stopThis() {
    var iframe = document.getElementById("myVideoId");
    var url = iframe.getAttribute('src');
    iframe.setAttribute('src', '');
    iframe.setAttribute('src', url);
    console.log("src");
}
document.getElementById("cancle").onclick = function () {
    stopThis();
    document.getElementById("ourVid").classList.remove("active");
    document.getElementById("ourVid").classList.add("remove");
    document.body.classList.remove("remove-scroll");

}

// open and close the detailes of service section 

var text = Array.from(document.getElementsByClassName("Text")),
    count = text.length,
    currenttab = 1,
    btn = Array.from(document.getElementsByClassName("plus"));

function viewDetails() {
    text.forEach(function (tab) {
        tab.classList.remove("add-text");
    });
    if (currenttab - 1 == 0) {
        text[currenttab - 1].classList.add("add-text");
    } else {
        text[0].classList.add("remove-text");
        text[currenttab - 1].classList.add("add-text");
    }
}
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        currenttab = parseInt(this.getAttribute("data-index"));
        viewDetails();
    }
}

// this code to make the tabs 
// first we call our main elements 
var boxs = Array.from(document.getElementsByClassName("work-cardes")),
    count = boxs.length,
    currenttab = 1,
    btns = Array.from(document.getElementsByClassName("header-p"));
// this funcation to remove the active classe from any main elements and add it to the element we need to active
function animation() {
    boxs.forEach(function (tab) {
        tab.classList.remove("card-active");
    });
    btns.forEach(function (dot) {
        dot.classList.remove("tap-active");
    });

    boxs[currenttab - 1].classList.add("card-active");
    btns[currenttab - 1].classList.add("tap-active");
    console.log("funcation");
}
// for loop to set the tab link
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        currenttab = parseInt(this.getAttribute("data-index"));
        animation();
    }
}


// owl slider

jQuery(document).ready(function () {
    $('.owl-carousel').owlCarousel({

        loop: true,
        autoplay: true,
        responsive: {
            1500: {
                items: 4,
                margin: 15,
            },
            1024: {
                items: 3,
                margin: 15,
            },
            600: {
                items: 2,
                margin: 10,
            },
            0: {
                items: 1,
                margin: 20,
            }
        }
    })
})
// //////last taps//////////
var divs = Array.from(document.getElementsByClassName("info")),
    count = boxs.length,
    currenttab = 1,
    tabLink = Array.from(document.getElementsByClassName("sp-btn"));

function animationTheTap() {
    divs.forEach(function (div) {
        div.classList.remove("active-text-div");
        div.classList.add("info");
    });
    tabLink.forEach(function (theLink) {
        theLink.classList.remove("focus");
    });
    divs[currenttab - 1].classList.remove("info");
    divs[currenttab - 1].classList.add("active-text-div");
    tabLink[currenttab - 1].classList.add("focus");
}
for (var i = 0; i < btns.length; i++) {
    tabLink[i].onclick = function () {
        currenttab = parseInt(this.getAttribute("data-index"));
        animationTheTap();
    }
}
// ////////////// تمت بحمد الله ////////////