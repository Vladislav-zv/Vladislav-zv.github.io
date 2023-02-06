function colors_1()
{
    let a = parseInt(prompt("Enter number: ",""));
    
    if(a % 2 == 0)
    {
        document.getElementById("data").innerHTML = '<font color=red size=3>liczba jest parzysta</font>';
    }
    if(a % 2 != 0)
    {
        document.getElementById("data").innerHTML = '<font color=silver size=5>liczba jest nieparzysta</font>';
    }
}