// Déclaration des variables
var selectedWork = sessionStorage.getItem("workId")
var data = null;


selectedWork = parseInt(selectedWork) - 1;

// Vérifie si un projet a été sélectionné
if (sessionStorage.getItem("workId") === null) {
    selectedWork = 0
}

// Récupère les données du fichier JSON qui contient les projets
fetch('works.json').then(function (response) {
    response.json().then(function (dataArray) {
        console.log(dataArray[selectedWork]);

        data = dataArray[selectedWork];
        editPage(dataArray);
    });

});


function editPage(dataArray) {
    // Modifie le contenu de la page selon le projet sélectionné
    document.querySelector('h1').innerHTML = data.titre;
    document.querySelector(".outils").innerHTML = data.competence;
    document.querySelector(".annee").innerHTML = data.annee;
    document.querySelector(".blocUn p").innerHTML = data.div1.desc;
    document.querySelector(".blocUn img").src = data.div1.img;
    document.querySelector(".blocDeux p").innerHTML = data.div2.desc;
    document.querySelector(".blocDeux img").src = data.div2.img1;
    document.querySelector(".imgProjet1").src = data.div3.img2;
    document.querySelector(".imgProjet").src = data.div3.img3;
    document.querySelector(".btnVisit").href = data.link;

    // Calculer les indices des projets précédent et suivant
    var prevIndex = (selectedWork - 1);
    var nextIndex = (selectedWork + 1);

    console.log('selected work =', selectedWork);
    console.log(prevIndex, nextIndex);

    // si le projet précédent est le premier, on affiche le dernier projet

    if (selectedWork === 0) {
        prevIndex = dataArray.length - 1;
    }

    if (selectedWork === dataArray.length) {
        nextIndex = 0;
    }

    console.log('selected work =', selectedWork);
    console.log(prevIndex, nextIndex);

    // Affiche les projets précédent et suivant
    document.querySelector(".prevWork h3").innerHTML = dataArray[prevIndex].titre;
    document.querySelector(".nextWork h3").innerHTML = dataArray[nextIndex].titre;
    document.querySelector(".prevWork img").src = dataArray[prevIndex].div1.img;
    document.querySelector(".nextWork img").src = dataArray[nextIndex].div1.img;

    document.querySelector('.prevWork').addEventListener('click', function (e) {
        // e.preventDefault()
        sessionStorage.setItem('workId', prevIndex + 1);
        window.location = './works.html';
    })


    document.querySelector('.nextWork').addEventListener('click', function (e) {
        // e.preventDefault()
        sessionStorage.setItem('workId', nextIndex + 1);
        window.location = './works.html';
    })

};



