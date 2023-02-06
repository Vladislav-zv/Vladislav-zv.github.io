function show()
{
    let n = parseInt(prompt("Ile razy powtórzyć: ",""));
    let text = prompt("Twoje inicjały: ","");

    for ( var i=1; i<=n; i++)
    {
        for ( var k=1; k<=i; k++)
        {
            document.getElementById("data").innerHTML+="&nbsp";
        }
        document.getElementById("data").innerHTML+=`${i}_${text}_${i}<br/>`;
    }
}
show();