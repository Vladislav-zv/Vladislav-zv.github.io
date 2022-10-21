function sumSeconds()
{
    let str = document.getElementById("result");
    let D1_Zgh = parseInt(prompt("Enter first day (D1):",""));
    let G1_Zgh = parseInt(prompt("Enter first hours (G1):",""));
    let D2_Zgh = parseInt(prompt("Enter second day (D2):",""));
    let G2_Zgh = parseInt(prompt("Enter second hours (G2):",""));
    let sumSeconds;

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
    if(G1_Zgh > 24 || G1_Zgh < 1 || G2_Zgh > 24 || G2_Zgh < 1)
    {
        alert("Error! Hours so bad (G > 24 or G < 1). Try again.");
        return;
    }
    if(D1_Zgh == 1 && D2_Zgh == 1 && G2_Zgh > G1_Zgh)
    {
        alert("Error! D1 = 1, D2 = 1 -> G2 must < G1.");
        return;
    }
    let a = D1_Zgh * 24 + G1_Zgh;
    sumSeconds = ((D1_Zgh * 24 + G1_Zgh)-(D2_Zgh * 24 + G2_Zgh)) * 60 * 60;
    str.innerHTML = `ilość sekund = ${sumSeconds}`;
}