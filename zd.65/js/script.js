function check_var_1()
{
    let rok_zgh = parseInt(prompt("Enter year of js: ",""));
    document.write(`<font color=black size=5>Wyczytany rok: ${rok_zgh}</font><br/><br/>`);
    if(rok_zgh==1995)
    {
        document.getElementById("data").innerHTML="<font color=blue size=4>Brawo znasz rok od kiedy działa Javasript</font>";
    }
    else
    {
        document.getElementById("data").innerHTML="<font color=red size=7>Źle, musisz jeszcze poczytać o java script</font>";
    }
}
check_var_1();