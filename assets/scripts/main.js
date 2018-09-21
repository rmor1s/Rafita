let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href="../index.html";
        }, 1000);

    });

})


let cantar1 = document.querySelectorAll(".cantar1");
cantar1.forEach(function(cantar1){
    cantar1.addEventListener('click', function(ev1){
        ev1.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href="./song/emb.html";
        }, 1000);
    });
})

let cantar2 = document.querySelectorAll(".cantar2");
cantar2.forEach(function(cantar2){
    cantar2.addEventListener('click', function(ev2){
        ev2.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href="./song/ebch.html";
        }, 1000);
    });
})

let cantar3 = document.querySelectorAll(".cantar3");
cantar3.forEach(function(cantar3){
    cantar3.addEventListener('click', function(ev3){
        ev3.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href="./song/ga.html";
        }, 1000);
    });
})

let cantar4 = document.querySelectorAll(".cantar4");
cantar4.forEach(function(cantar4){
    cantar4.addEventListener('click', function(ev4){
        ev4.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href="./song/rapi.html";
        }, 1000);
    });
})

let cantar5 = document.querySelectorAll(".cantar5");
cantar5.forEach(function(cantar5){
    cantar5.addEventListener('click', function(ev5){
        ev5.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href="./song/alld.html";
        }, 1000);
    });
})