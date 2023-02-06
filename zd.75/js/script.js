function show() {
    let i = 40;
    let w;
    let flag = 0;
    let counter = 0;
    let interval = setInterval(() => {
      if (counter === i) {
        clearInterval(interval);
        return;
      }
      if(flag===5)
      {
        confirm("Continue");
        flag=0;
      }
      flag++;
      w = counter * counter + counter + 41;
      document.getElementById("data").innerHTML += `<p style="font-size: 18px">w(${counter})=${w}</p>`;
      counter++;
    }, 100);
}