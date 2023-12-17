
var workContainer = document.getElementById("works");

// Création de la fonction addWork qui va permettre d'ajouter les données du tableau du works.json dans le HTML 
function addWork(work) {
    var newDiv = document.createElement("div"); // Création d'une div
    newDiv.className = "container"; // Ajout de la classe container à la div

    var newNumber = document.createElement("p"); // Création d'un paragraphe correspondant au numéro du projet
    var newTitle = document.createElement("p"); // Création d'un paragraphe correspondant au titre du projet
    var newSkill = document.createElement("p"); // Création d'un paragraphe correspondant à la compétence utilisée pour le projet
    var newYear = document.createElement("p"); // Création d'un paragraphe correspondant à l'année du projet
    var newTextDiv = document.createElement("div"); // Création d'une div qui va contenir les paragraphes
    var newLink = document.createElement("a"); // Création d'un lien qui va permettre d'accéder à la page du projet

    newNumber.innerHTML = work.numero; // Ajout du numéro du projet dans le HTML
    newNumber.className = "numero";
    newTitle.innerHTML = work.titre; // Ajout du titre du projet dans le HTML
    newTitle.className = "titre";
    newSkill.innerHTML = work.competence; // Ajout de la compétence utilisée pour le projet dans le HTML
    newSkill.className = "competence";
    newYear.innerHTML = work.annee; // Ajout de l'année du projet dans le HTML


    newLink.innerHTML = "Discover"; // Ajout du texte "Discover" dans le HTML
    newLink.className = "linkWork";
    newLink.href = "./works.html"; // Ajout du lien vers la page works.html dans le HTML



    // Ajout des paragraphes dans la div newTextDiv
    newTextDiv.appendChild(newTitle);
    newTextDiv.appendChild(newSkill);
    newTextDiv.appendChild(newYear);

    // Ajout des éléments dans la div newDiv
    newDiv.appendChild(newNumber);
    newDiv.appendChild(newTextDiv);
    newDiv.appendChild(newLink);

    workContainer.appendChild(newDiv);

    // effet de survol sur les liens 
    newLink.addEventListener("mouseenter", function () {
        newLink.innerHTML = "&#8594;"; // Unicode arrow character
    });

    newLink.addEventListener("mouseleave", function () {
        newLink.innerHTML = "Discover";
    });

    // Ajout d'un événement au clic sur le lien qui va permettre de stocker le numéro du projet dans le sessionStorage et d'accéder à la page works.html
    newLink.addEventListener("click", function (e) {
        e.preventDefault();
        sessionStorage.setItem("workId", work.numero);
        window.location = "./works.html";
    })


    // Ajout d'un effet de survol sur les titres des projets
    newDiv.addEventListener("mouseenter", function () {
        newTitle.style.fontFamily = "Boska";
        newTitle.style.fontStyle = "italic";
    });

    newDiv.addEventListener("mouseleave", function () {
        newTitle.style.fontFamily = "Raleway";
        newTitle.style.fontStyle = "normal";
    })
}


//sélection des données du tableau dans works.json 

fetch('works.json').then(function (response) {
    response.json().then(function (data) {
        data.forEach(function (work) {
            addWork(work);
        });
    });
});

