let img1;
let img2;
let img3;
let img4;


function winOpenImg1Zghurskyi() 
{
    img1 = window.open("../pages/image1.html", "", "width=280,height=350, left=50, top=120");
}
function winOpenImg2Zghurskyi() 
{
    img2 = window.open("../pages/image2.html", "", "width=280,height=350, left=350, top=120");
}
function winOpenImg3Zghurskyi() 
{
    img3 = window.open("../pages/image3.html", "", "width=280,height=350, left=650, top=120");
}
function winOpenImg4Zghurskyi() 
{
    img4 = window.open("../pages/image4.html", "", "width=280,height=350, left=950, top=120");
}

function winCloseZghurskyi(){
    img1.close();
    img2.close();
    img3.close();
    img4.close();
}