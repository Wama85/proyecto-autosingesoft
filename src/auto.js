class Auto{
    constructor(coordX,coordY,direccion){
      this.coordX=coordX;
      this.coordY=coordY;
      this.direccion=direccion;
      this.girosIzquierda= new Map();
      this.girosIzquierda.set("O","S");
      this.girosIzquierda.set("N","O");
      this.girosIzquierda.set("S","E");
      this.girosIzquierda.set("E","N");

      this.girosDerecha=new Map();
      this.girosDerecha.set("N","E");
      
    }
  
    ejecutar(comando){
        if (comando === "I"){
            this.direccion=this.girosIzquierda.get(this.direccion)
        }
        else{
            this.direccion=this.girosDerecha.get(this.direccion)
        }
        
    }
    posicionActual(){
      let posicion=this.coordX + "," +this.coordY +this.direccion;
      return posicion;
  
      
    }
  }
  
  export default Auto;