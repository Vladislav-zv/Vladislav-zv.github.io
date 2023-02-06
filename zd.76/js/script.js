function show()
{
    let i = 45;
    let flag = 0;
    let counter = 30;
    let interval = setInterval(() => {
      if (counter > i) {
        clearInterval(interval);
        return;
      }
      if(flag===3)
      {
        confirm("Continue");
        flag=0;
      }
      let sqrt = Math.pow(counter, 1/2);
      let fourthRoot = Math.pow(counter, 1/4);

      flag++;

      document.getElementById("data").innerHTML += `<p style="font-size: 18px">l=${counter} &nbsp &nbsp pierw_2(${counter}): ${sqrt.toFixed(2)}, &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp pierw_4(${counter}): ${fourthRoot.toFixed(2)}</p>`;
      counter++;
    }, 100);
}