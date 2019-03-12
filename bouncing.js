let x = 0;
let spX = 3 ;
let spY = 3  ;
let y = 0;

function setup() {
  createCanvas(400, 400);

}


function draw() {

  background(0);
  ellipse(x, y, 20, 20);
  if(  width < x  && width < y ){
     spX = - random(1,4) ;
     spY =  - random(1,4)  ;
  }
  if( x < 0  && y < 0 ){
       spX = random(1,4) ;
       spY =  random(1,4) ;
  }
  if( width < x    ){
       spX = - random(1,4) ;
  }
  if( width < y ){
       spY = - random(1,4)  ;
  }
  if( x < 0   ){
       spX =   random(1,4) ;
  }
  if(  y <  0  ){
       spY =   random(1,4) ;
  }
   y = y + spY ;
   x = x + spX ;
}
