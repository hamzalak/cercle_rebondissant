let x = 0; // position initiale x0
let y = 0; // position initiale y0
let spX = 3; // vitesse initiale V0x du cercle
let spY = 3; // vitesse initiale  V0y du cerlce

function setup() {

  createCanvas(400, 400); // Création du cadre html (DOM)

}


function draw() {

  background(0); // couleur de fond
  ellipse(x, y, 20, 20);  // ellipse (cercle de rayon 10

  if (width < x && width < y) { // condition de bords ( corner)

    spX = -random(1, 4);  // vitesse aléatoire entre 1 et 3
    spY = -random(1, 4);
  }
  if (x < 0 && y < 0) {  // condition de bords ( corner)

    spX = random(1, 4);
    spY = random(1, 4);
  }
  if (width < x) {  // condition de bord sur x > largeur
    spX = -random(1, 4);
  }
  if (width < y) {  // condition de bord sur y > largeur
    spY = -random(1, 4);
  }
  if (x < 0) {     // condition de bord sur x < largeur-larguer =0
    spX = random(1, 4);
  }
  if (y < 0) {
    spY = random(1, 4);  // condition de bord sur y < largeur-larguer =0  
  }
  y = y + spY;
  x = x + spX;
}
