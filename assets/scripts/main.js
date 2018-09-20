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