function show()
{
    let num1_zgh = parseInt(prompt("Enter number 20<x<60: "));
    if(num1_zgh < 20 || num1_zgh > 60)
    {
        alert("Error! 20<x<60");
        return;
    }

    let num2_zgh = parseInt(prompt("Enter number 20>x<60: "));
    if(num2_zgh < 20 || num2_zgh > 60)
    {
        alert("Error! 20<x<60");
        return;
    }

    let text_zgh = prompt("Enter text: ","");

    if(num1_zgh<num2_zgh)
    {
        for(let i = num1_zgh; i < 100; i=i+5)
        {
            if(i>100)
            {
                return;
            }
            document.getElementById("data").innerHTML+="<p style=\"font-size:"+i+"px; color: black;\"><br>"+text_zgh+"<br></p>";
        }
    }

    if(num1_zgh>num2_zgh)
    {
        for(let i = num1_zgh; i > 0; i=i-5)
        {
            if(i<0)
            {
                return;
            }
            document.getElementById("data").innerHTML+="<p style=\"font-size:"+i+"px; color: black;\"><br>"+text_zgh+"<br></p>";
        }
    }
}