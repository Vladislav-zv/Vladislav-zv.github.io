function show()
{
    document.getElementById("data").innerHTML="";
    let a_zgh = prompt("Enter surname: ","");
    let b_zgh = prompt("Enter name: ","");

    debugger;
    a_zgh = parseInt(a_zgh.length%4+5);
    b_zgh = parseInt(b_zgh.length%6+20);



    for(let i = 0; i < b_zgh-a_zgh; i++)
    {
        document.getElementById("data").innerHTML+="&nbsp";
    }
    document.getElementById("data").innerHTML+="b<br/>";

    for(let i = 0; i < b_zgh; i++)
    {
        document.getElementById("data").innerHTML+="*";
    }

    document.getElementById("data").innerHTML+="<br/>";
    for(let i = 0; i < a_zgh-2; i++)
    {
        document.getElementById("data").innerHTML+="*";
        for(let j = 0; j < b_zgh+b_zgh/2-3; j++)
        {
            document.getElementById("data").innerHTML+="&nbsp";
        }
        if(i == parseInt(a_zgh/2)-1)
        {
            document.getElementById("data").innerHTML+="* ";
            for(let g = 0; g < b_zgh/2; g++)
            {
                document.getElementById("data").innerHTML+="&nbsp";
            }
            document.getElementById("data").innerHTML+="a <br/>";
            continue;
        }
        document.getElementById("data").innerHTML+="*<br/>";
    }

    for(let i = 0; i < b_zgh; i++)
    {
        document.getElementById("data").innerHTML+="*";
    }
}
//show();