function setup() {
  createCanvas(600, 600);
}
 let stars=function(){
  ellipse(random(0,400),random(0,200),10,10);
};
stars()
function draw() {
  background('black')
 
 
  //Planet
  fill(0, 100, 0)
  ellipse(300,800,1000,700)

   //UFO
  fill(169, 169, 169)
  ellipse(mouseX, mouseY, 200, 50)
  fill(250, 250, 191)
  ellipse(mouseX, mouseY - 20, 100, 60)
  fill(57, 255, 20)
  ellipse(mouseX - 70, mouseY - 5, 11 ,11)
  ellipse(mouseX + 70, mouseY - 5, 11 ,11)
  ellipse(mouseX - 45, mouseY + 10, 11 ,11)
  ellipse(mouseX + 45, mouseY + 10, 11 ,11)
  ellipse(mouseX + 15, mouseY + 18, 11 ,11)
  ellipse(mouseX - 15, mouseY + 18, 11 ,11)
  
}
