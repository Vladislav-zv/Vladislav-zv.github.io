function show_prompt() 
{ 
    var name=prompt("Napisz imię","Imię Nazwisko"); 
    if (name!=null && name!="") 
    { 
        document.write("Witaj " + name + "! jak się masz?"); 
    }
}