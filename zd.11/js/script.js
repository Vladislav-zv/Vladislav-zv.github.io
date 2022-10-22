function foo()
{
    let m_Zgh = parseInt(prompt("Enter number:", ""));
    document.write(`<p class="text" style="margin: 2% 2% 2% 2%;">1/${m_Zgh} = 1/${m_Zgh+2} + 
    1/${(m_Zgh+2)*(m_Zgh+3)} + 1/${m_Zgh*(m_Zgh+1)}</p>`);
}