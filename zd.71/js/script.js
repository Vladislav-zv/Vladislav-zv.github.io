function show()
{
    let a_zgh = 7;
    let b_zgh = 21;

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
        for(let j = 0; j < b_zgh+a_zgh+1; j++)
        {
            document.getElementById("data").innerHTML+="&nbsp";
        }
        if(i == 2)
        {
            document.getElementById("data").innerHTML+="* &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp a<br/>";
            continue;
        }
        document.getElementById("data").innerHTML+="*<br/>";
    }

    for(let i = 0; i < b_zgh; i++)
    {
        document.getElementById("data").innerHTML+="*";
    }
}
show();