let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let StarTab ; 

function setup() {
    createCanvas(viewportWidth, viewportHeight);
    StarTab = new StarArray(viewportWidth,viewportHeight,100); 


}
function draw() {
    background(0);

    // Separation 

    //Drawing Stars  
    noStroke();
    fill(255,255,255);
    StarTab.DrawStars(); 

    //Drawing Lines 
    stroke(255);
    strokeWeight(0.5)
    StarTab.DrawLines(); 

    //Update
    StarTab.Update(viewportWidth,viewportHeight);



}



