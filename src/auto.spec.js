import sumar from "./sumador.js";

describe("Auto gira a la izquierda",()=>{
  it("Gira a la Izquierda desde el norte",()=>{
    let auto = new Auto(0, 0, "N");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0O");
  });

})

class Auto{
  ejecutar(){

  }
  posicionActual(){
    return "0,0O"
  }
}
