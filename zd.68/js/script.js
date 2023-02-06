function Exam_68()
{
    let n = parseInt(prompt("Enter n: ",""));
    
    if(n%2==0)
    {
        for(let i = 0; i < 12; i++)
        {
            document.getElementById("data").innerHTML+=`<p style="font-size:43px;">Vladyslav</p>`;
        }
    }
    else
    {
        for(let i = 0; i < 12; i++)
        {
            document.getElementById("data").innerHTML+=`<p style="font-size:43px;">Zghurskyi</p>`;
        }
    }
}
Exam_68();