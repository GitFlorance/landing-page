document.addEventListener("DOMContentLoaded", ()=>{
    console.log("a");
    const startButton = document.querySelector(".js-menu_button");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");

    startButton.addEventListener ("click", (event) => {
        menu.classList.toggle('invisible');
        body.classList.toggle('hidden');
        console.log("f");
    });
});
