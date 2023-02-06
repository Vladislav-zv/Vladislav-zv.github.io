function colors_1()
{
    let a = prompt("Enter color: ","");
    
    if(a == "1" || a.toLowerCase() == "czerwony")
    {
        document.getElementById("data").innerHTML = '<font color=red size=7>wczytałeś kolor czerwony</font>';
    }
    if(a == "2" || a.toLowerCase() == "niebieski")
    {
        document.getElementById("data").innerHTML = '<font color=blue size=1>wczytałeś kolor niebieski</font>';
    }
}

function colors_2()
{
    let a = document.getElementById("col").value;
    
    if(a == "1" || a.toLowerCase() == "czerwony")
    {
        document.getElementById("data").innerHTML = '<font color=red size=7>wczytałeś kolor czerwony</font>';
    }
    if(a == "2" || a.toLowerCase() == "niebieski")
    {
        document.getElementById("data").innerHTML = '<font color=blue size=1>wczytałeś kolor niebieski</font>';
    }
}