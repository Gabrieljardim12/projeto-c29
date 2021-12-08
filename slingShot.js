class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            // rigidez
            stiffness: 0.02,
            //comprimento
            length: 5
        }
        
        this. bodyA = bodyA
        this. pointB = pointB
        //criação da restriçao
        this.sling = Constraint.create(options)
        //add no mundo
        World.add(world, this.sling);

    }

   attach(body){
        this.sling.bodyA = body;
    }
    
// para o passarinho desgrudar quando soltar o estilingue
    fly(){

    
        //Para o passarinho continuar voando na tela e não ficar parado
        this.sling.bodyA = null;
    }


display() 
{ 
    if(this.sling.bodyA) 
    { 
        var pointA=this.bodyA.position; 
        var pointB=this.pointB 
        strokeWeight(2); 
        line(pointA.x,pointA.y,pointB.x,pointB.y); 
    }
}
}