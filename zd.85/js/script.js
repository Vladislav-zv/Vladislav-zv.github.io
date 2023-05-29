function show()
{

    let R_zgh = parseInt(document.getElementById("r").value);

    let R = (R_zgh + 1);
    let counter = 0;
    for (let i_zgh = -R; i_zgh <= R; i_zgh++) {
      for (let j_zgh = -R; j_zgh <= R; j_zgh++) {
        let distance = Math.sqrt(i_zgh * i_zgh + j_zgh * j_zgh);
        if (distance <= R_zgh) {
          counter++;
        }
      }
    }
    alert(counter);
    
}