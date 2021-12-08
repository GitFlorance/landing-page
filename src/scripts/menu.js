document.addEventListener("DOMContentLoaded", ()=>{
    const startButton = document.querySelector(".js-menu_button");
    const menu = document.querySelector(".conteiner");
    const body = document.querySelector("body");
    const lineOne = document.querySelector(".js-menu_lineOne");
    const lineTwo = document.querySelector(".js-menu_lineTwo");

    const openClose = function () {
        console.log("dfg");
        menu.classList.toggle('invisible');
        body.classList.toggle('hidden');
        lineOne.classList.toggle('line__1');
        lineTwo.classList.toggle('line__2');
    };
    
    startButton.addEventListener ("click", openClose);
    document.querySelectorAll('.js__menu--close').forEach(item => {
        item.addEventListener('click', openClose)
      })
});