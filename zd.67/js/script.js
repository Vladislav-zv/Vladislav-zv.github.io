function Exam_67()
{
    let n = 11;
    
    if(n%2==0)
    {
        for(let i = 0; i < n; i++)
        {
            document.getElementById("data").innerHTML+=`<p style="font-size:40px;">Vladyslav</p>`;
        }
    }
    else
    {
        for(let i = 0; i < n; i++)
        {
            document.getElementById("data").innerHTML+=`<p style="font-size:40px;">Zghurskyi</p>`;
        }
    }
}
Exam_67();