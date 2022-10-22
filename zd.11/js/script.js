function foo()
{
    let m_Zgh = parseInt(prompt("Enter number:", ""));
    document.write(`<p style="margin: 2% 2% 2% 2%; font-size:2vw; color: darkblue">1/${m_Zgh} = 1/${m_Zgh+2} + 
    1/${(m_Zgh+2)*(m_Zgh+3)} + 1/${m_Zgh*(m_Zgh+1)}</p>`);
}