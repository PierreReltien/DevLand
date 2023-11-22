//Déclaration des variables correspondant à chaque box en utilisant la méthode forEach. Ces variables sont stockés dans un objet hoveredBoxes

const boxes = ['box1', 'box2', 'box3', 'box4'];
const hoveredBoxes = [];
boxes.forEach(function (box) {
    hoveredBoxes.push(document.getElementById(box));
})

//définition des fonctions event handler qui agisse sur chaque box en fonction des différents évenements
const modifBoxOn = function (event) {
    event.target.style.boxShadow = '-5px 5px 0px white';
    event.target.style.opacity = '0.6';

}
const modifBoxOff = function (event) {
    event.target.style.boxShadow = 'none';
    event.target.style.opacity = '1';
}


//association entre les évènements, les fonctions event handler et chacune des boxes
hoveredBoxes.forEach(function (hoveredBox) {
    hoveredBox.addEventListener("mouseover", modifBoxOn,true);   
    hoveredBox.addEventListener("mouseleave", modifBoxOff),true;
})


/* alternative au forEach : for (let i = 0; i< hoveredBoxes.length; i++ ) { 
hoveredBoxes[i].addEventListener("mouseover", modifBoxOn);
hoveredBoxes[i].addEventListener("mouseleave", modifBoxOff);
}*/