function show_confirm() 
{ 
    var r=confirm("Naciśnij klawisz"); 
    if (r==true) 
    { 
        document.write("Nacisnąłeś OK!"); 
    } 
    else 
    { 
        document.write("Nacisnąłeś Cancel!"); 
    } 
} 