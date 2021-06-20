const leapYear = document.getElementById("submit")

leapYear.addEventListener("click", function()
{
    let year = document.getElementById("leapinput").value;
    let leapResult = document.getElementById("response")

    if ( (0==year%4) && (0 != year% 100) || (0== year%400) )
    {
        leapResult.innerHTML = 'This Year is a leap year';
    }
    else
    {
        leapResult.innerHTML = 'This is not a leap year';
    }
}
)