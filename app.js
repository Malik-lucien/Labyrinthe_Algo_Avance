function randomOrNot() {
    let random = true;
    let content = document.getElementById('grid-container');
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    if (random) {
        randomLab();
    }else {
        chooseLab()
    }
}
/*===============CODE GENERANT LE LABYRINTHE=========================*/
function randomLab() {
    let randomCase = Math.floor(Math.random() * Object.keys(labyrinthes).length);
    let randomEx = Math.floor(Math.random() * 3);
    new_labyrinthe(randomCase, labyrinthes[randomCase]["ex-" + randomEx])
}

function chooseLab() {
    new_labyrinthe(6, labyrinthes["6"]["ex-0"]);
}

function new_labyrinthe(taille, ex) {

    document.getElementById("grid-container").style.gridTemplateColumns = "repeat(" + taille + ", 50px)";
    document.getElementById("grid-container").style.gridTemplateRows = "repeat(" + taille + ", 50px)";


    //haut droit bas gauche 
    for (let i = 0; i < ex.length; i++) {
        let borderstyle = "";

        for (let j = 0; j < ex[i]["walls"].length; j++) {

            if (ex[i]["walls"][j]) {
                borderstyle = borderstyle + "solid ";
            } else {
                borderstyle = borderstyle + "none ";
            }
        }

        console.log(borderstyle, "celule num " + ex[i]["posX"] +"_"+ ex[i]["posY"]);
        let element = document.createElement("DIV");
        element.id = "cellule_"+ ex[i]["posX"] +"_"+ ex[i]["posY"];
        if(i === ex.length-1){
            element.style.backgroundColor = "tomato"}
        element.style.borderStyle = borderstyle;
        element.style.borderColor = "rgb(210,10,122)";
        document.getElementById("grid-container").appendChild(element);

    }
}

/*==============CODE SE DEPLACANT DANS LE LABYRINTHE=================*/
function move(nbCote) {
    let posX = 0;
    let posY = 0;
    while (lastCase(nbCote, posX, posY)) {
        for (let i=0; i<4; i++) {

        }
    }
}

function lastCase(nbCote, X, Y) {
    return (X === nbCote) && (Y === nbCote);
}