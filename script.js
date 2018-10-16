(function() {
    let body = document.querySelector("body");
    let inlay = document.querySelector(".textbox");
    let button = document.querySelector(".button");
    if (!localStorage.getItem("choice")) {
        let choice = prompt("Do you prefer a light or dark site?");
        localStorage.setItem("choice", choice);
    }
    if (localStorage.getItem("choice") == "dark") {
        body.classList.add("dark");
        inlay.classList.add("darkInlay");
        button.classList.add("darkButton");
    } else if (localStorage.getItem("choice") == "light") {
        body.classList.add("light");
        inlay.classList.add("lightInlay");
        button.classList.add("lightButton");
    } else {
        localStorage.removeItem("choice");
    }
    button.addEventListener("click", function() {
        localStorage.removeItem("choice");
        location.reload();
    });
})();
