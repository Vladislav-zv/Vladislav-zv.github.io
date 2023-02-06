function show()
{
    let num1 = parseInt(prompt("Enter first number: ",""));
    let num2 = parseInt(prompt("Enter second number: ",""));

    if(num1==num2)
    {
        alert("Error! first!=second number");
        return;
    }

    if(num1<num2)
    {
        for(let i = num1; i <= num2; i++)
        {
            if(i==2)
            {
                document.getElementById("data").innerHTML+=`<p style="color: green; font-size: 24px;">${i}</p>`;
                continue;
            }
            if(i%2==0)
            {
                document.getElementById("data").innerHTML+=`<p style="color: green; font-size: 24px;">${i}</p>`;
            }
        }
    }

    if(num1>num2)
    {
        for(let i = num1; i >= num2; i--)
        {
            if(i==2)
            {
                document.getElementById("data").innerHTML+=`<p style="color: blue; font-size: 12px;">${i}</p>`;
                continue;
            }
            if(i%2==0)
            {
                document.getElementById("data").innerHTML+=`<p style="color: blue; font-size: 12px;">${i}</p>`;
            }
        }
    }
}