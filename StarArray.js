class StarArray {
    constructor(_Width,_Height,_Quantity){
       this.StarViewDistance = 100 ; 
       this.MouseViewDistance  = 100;
       this.MouvementSpeed = 0.2  ;
       this.Stars  = new Array();
       for(let i=0;i<_Quantity;i++) {
           let X = Math.round(Math.random()*_Width);
           let Y = Math.round(Math.random()*_Height);
           this.Stars.push(new Star(X,Y, this.MouvementSpeed)) ;
            }
        }
    DrawStars() {
            for(let i = 0 , Length = this.Stars.length;i<Length;i++){
                this.Stars[i].Draw();
            }
        }
    DrawLines() {
        let MouseViewStars = new Array() ;
        for(let i = 0 , Length = this.Stars.length;i<Length;i++){
            if(dist(mouseX,mouseY, this.Stars[i].X, this.Stars[i].Y) <= this.MouseViewDistance){
                MouseViewStars.push(this.Stars[i]);
            }
        }
        for(let i = 0 , ILength = MouseViewStars.length;i<ILength;i++){

            for(let j=0,JLength =this.Stars.length;j<JLength;j++){

                if(dist(MouseViewStars[i].X,MouseViewStars[i].Y,this.Stars[j].X,this.Stars[j].Y) <= this.StarViewDistance){


                     line(MouseViewStars[i].X,MouseViewStars[i].Y,this.Stars[j].X,this.Stars[j].Y);
                }
            }

        }
    }    

   
    Update(_Width,_Height){
        for(let i = 0 , Length = this.Stars.length;i<Length;i++){
            this.Stars[i].Update(_Width,_Height) ;       
        }
    }
}
    