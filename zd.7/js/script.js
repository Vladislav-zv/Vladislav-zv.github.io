function foo()
{
    var liczba1=prompt("liczba1 = ","");
    var liczba2=prompt("liczba2 = ","");
    var suma;
    var a=parseFloat(liczba1);
    var b=parseFloat(liczba2);
    suma=a+b;
    document.write("<p class='text' style='margin-left: 5%;margin-top:2%;'>suma = "+a+" + "+b+" = "+suma+"<br></p>");
}

foo();