// script.js
function showDescription(id, element) {
    const description = document.getElementById(id);
    description.style.display = "block";
    element.textContent = "Ver Descrição";
}


function showHearts(element) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    element.parentElement.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}
