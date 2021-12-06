document.addEventListener("DOMContentLoaded", ()=>{
    console.log("a");
    const startButton = document.querySelector(".js-menu_button");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    const lineOne = document.querySelector(".js-menu_lineOne");
    const lineTwo = document.querySelector(".js-menu_lineTwo");
    const rep = document.querySelector(".gitRepositori");

    startButton.addEventListener ("click", (event) => {
        menu.classList.toggle('invisible');
        body.classList.toggle('hidden');
        lineOne.classList.toggle('line__1');
        lineTwo.classList.toggle('line__2');
        console.log("f");
    });

    fetch('https://api.github.com/users/GitFlorance/repos').then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((element) => {
            if (element.fork == false) {
                renderRepo(element)
            } else {
                console.log(data);
            };
        });
    });

    let renderRepo = function (arg) {
        console.log(arg.fork);
        let conteiner = document.createElement("div");
        conteiner.innerHTML="";
        conteiner.className = "repositori";
        rep.appendChild(conteiner);

        let name = document.createElement("div");
        name.innerHTML= arg.name;
        name.className = "repositori__name";
        conteiner.appendChild(name);

        let description = document.createElement("div");
        description.innerHTML=arg.description;
        description.className = "repositori__description";
        conteiner.appendChild(description);

        let item = document.createElement("div");
        item.innerHTML="";
        item.className = "repositori__item";
        item.className = "item";
        conteiner.appendChild(item);

        let dot = document.createElement("div");
        dot.innerHTML="";
        dot.className = "item__dot";
        switch (arg.language) {
            case "HTML":
                dot.classList.add ("or");
                break;
            case "CSS":
                dot.classList.add ("viol");
                break;
            case "JavaScript":
                dot.classList.add ("yell");
                break;
            default:
                dot.classList.add ("ano");
                break;
        }
        item.appendChild(dot);

        let language = document.createElement("div");
        language.innerHTML=arg.language;
        switch (arg.language) {
            case null:
                language.innerHTML="some";
                break;
        }
        language.className = "item__lg";
        item.appendChild(language);

        let star = document.createElement("div");
        star.innerHTML="&#9733;";
        star.className = "item__star";
        item.appendChild(star);

        let count = document.createElement("div");
        count.innerHTML=arg.stargazers_count;  
        count.className = "item__count";
        item.appendChild(count);
            
    

    }

});

