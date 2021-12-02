document.addEventListener("DOMContentLoaded", ()=>{
    console.log("a");
    const startButton = document.querySelector(".js-menu_button");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    const lineOne = document.querySelector(".js-menu_lineOne");
    const lineTwo = document.querySelector(".js-menu_lineTwo");

    startButton.addEventListener ("click", (event) => {
        menu.classList.toggle('invisible');
        body.classList.toggle('hidden');
        lineOne.classList.toggle('line__1');
        lineTwo.classList.toggle('line__2');
        console.log("f");
    });
});
