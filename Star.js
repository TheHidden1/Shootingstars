class Star{
    constructor(_X,_Y,_MouvementSpeed) {
        this.X = _X;
        this.Y = _Y;
        this.VX = (_MouvementSpeed*(Math.random(-1,1)));
        this.VY = (_MouvementSpeed*(Math.random(-1,1)));
       // this.Radius = 5;
    }
    
    Draw() { ellipse(this.X,this.Y,3); }

    Update(_Width,_Height) {
        if(this.Y < 0 || this.Y > _Height){ this.VY = - this.VY;};
        if(this.X < 0 || this.X > _Width){ this.VX = - this.VX;}
        this.X += this.VX;
        this.Y += this.VY;
    }
       
   
}