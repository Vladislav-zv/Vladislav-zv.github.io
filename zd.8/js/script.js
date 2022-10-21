function sumSeconds()
{
    let str = document.getElementById("result");
    let D1_Zgh = prompt("Enter first day (D1):","");
    let D2_Zgh = prompt("Enter second day (D2):","");
    let sumSeconds = 60*60*24;

    if(D1_Zgh > 31 || D1_Zgh < D2_Zgh)
    {
        alert("Error! D1 > 31 or D1 < D2. Try again.");
        return;
    }
    if(D1_Zgh < 1 || D2_Zgh < 1)
    {
        alert("Error! D1 < 1 or D2 < 1. Try again.");
        return;
    }
    if(D1_Zgh == D2_Zgh)
    {
        sumSeconds = 60*60*24;
        str.innerHTML = `ilość sekund = ${sumSeconds}`;
        return;
    }
    sumSeconds = sumSeconds*(D1_Zgh-D2_Zgh);
    str.innerHTML = `ilość sekund = ${sumSeconds}`;
}