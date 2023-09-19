
import Auto from "./auto";

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
  it("Gira a la Izquierda desde el Este",()=>{
    let auto = new Auto(0, 0, "E");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0N");
  });

})


