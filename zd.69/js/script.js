function show()
{
    for ( var i=1; i<=10; i++)
    {
        for ( var k=1; k<=i; k++)
        {
            document.getElementById("data").innerHTML+="&nbsp";
        }
        document.getElementById("data").innerHTML+=`${i}<br/>`;
    }
}
show();