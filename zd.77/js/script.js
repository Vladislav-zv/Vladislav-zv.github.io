function show()
{
    let number = parseInt(prompt("Enter n>2: ",""));
    if(number<=2)
    {
        alert("Error! n>2");
        return;
    }
    for(let i = 2; i <= number; i++)
    {
        if(i%2==0)
        {
            document.getElementById("data").innerHTML += `<p style="font-size: 18px">${i}</p>`;
        }
    }
}