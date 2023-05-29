function btn_1()
{
  document.getElementById("content").innerHTML+="Ostatnia modyfikacja: "+document.lastModified+"<br/>";
}

function btn_2()
{
  let date = new Date();
  document.getElementById("content").innerHTML+="Data: "+date.getDate()+":"+date.getMonth()+":"+date.getFullYear()+"<br/>";
}

function btn_3()
{
  let date = new Date();
  document.getElementById("content").innerHTML+="Godzina: "+date.getHours()+":"+date.getMinutes()+"<br/>";
}