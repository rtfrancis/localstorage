(function() {
    let body = document.querySelector("body");
    if (!localStorage.getItem("choice")) {
        let choice = prompt("Do you prefer a light or dark site?");
        localStorage.setItem("choice", choice);
    }
    let color = localStorage.getItem("choice");
    console.log(color);
    body.classList.add(color);
})();

// let choice = prompt("Do you prefer a light or dark site?");
//
// console.log(choice);
// localStorage.setItem("choice", choice);
