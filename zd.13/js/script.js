function calc(){
    let numberOne = parseInt(prompt("Podaj pierwszą liczbę A = ",""));
    let numberTwo = parseInt(prompt("Podaj drugą liczbę B = ",""));
    let result = Math.pow(numberOne, 3) + Math.pow(numberTwo, 3) + (3*(Math.pow(numberOne, 2)*numberTwo)) +
    + 3*(numberOne*Math.pow(numberTwo, 2));

    document.write(`<p style="font-size:2vw;">Wyczytane liczby: A = ${numberOne}, B = ${numberTwo}</p><br/></br>`);

    document.write("<p style='color: rgb(0, 0, 128); font-size:3vw;'>");
    document.write(`(${numberOne} + ${numberTwo})^3 = ${numberOne}^3 + 3 * ((${numberOne})^2)*(${numberTwo})
     + 3 * (${numberOne})*((${numberTwo})^2) + ${numberTwo}^3 = ${Math.pow(numberOne, 3)} + 
     ${3*Math.pow(numberOne, 2)*numberTwo} + ${3*numberOne*Math.pow(numberTwo, 2)} + ${Math.pow(numberTwo, 3)} 
     = ${result} </p>`);
}