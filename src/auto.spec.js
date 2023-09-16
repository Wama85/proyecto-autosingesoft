import sumar from "./sumador.js";

describe("Auto gira a la izquierda",()=>{
  it("Gira a la Izquierda desde el norte",()=>{
    let auto = new Auto(0, 0, "N");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0O");
  });
  it("Gira a la Izquierda desde el Oeste",()=>{
    let auto = new Auto(0, 0, "O");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0S");
  });
  it("Gira a la Izquierda desde el Sur",()=>{
    let auto = new Auto(0, 0, "S");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0E");
  });

})

class Auto{
  constructor(coordX,coordY,direccion){
    this.coordX=coordX;
    this.coordY=coordY;
    this.direccion=direccion;
  }

  ejecutar(comando){
    if(this.direccion ==="O"){
      this.direccion="S";
    }
    else if (this.direccion === "N"){
      this.direccion ="O";
    }
    else if (this.direccion === "S"){
      this.direccion ="E";
    }


  }
  posicionActual(){
    let posicion=this.coordX + "," +this.coordY +this.direccion;
    return posicion;

    
  }
}
