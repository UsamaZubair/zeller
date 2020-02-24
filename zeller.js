function zeller(D, M, Y){    
    var Day = "";

    if (M < 3)
    {
        M = M + 12;
        Y = Y - 1;
    }
    
    var C = Math.floor(Y / 100);
	var K = Y - (100 * C);
	
	var S = Math.floor(2.6 * M - 5.39) + Math.floor(K / 4) + Math.floor(C / 4) + D + K - (2 * C);
	
    var ans = S - (7 * Math.floor(S / 7));
    
    if (ans == 0)
    {
        Day = "Sunday";
    }
    else if (ans == 1)
    {
        Day = "Monday";
    }
    else if (ans == 2)
    {
        Day = "Tuesday";
    }
    else if (ans == 3)
    {
        Day = "Wednesday";
    }
    else if (ans == 4)
    {
        Day = "Thursday";
    }
    else if (ans == 5)
    {
        Day = "Friday";
    }
    else
    {
        Day = "Saturday";
    }
    
    return Day;
}

console.log(zeller(14,12,1993));

const input = document.getElementById("input")
const submit = document.getElementById("submit")
const day = document.getElementById("day")


submit.querySelector(`click`,() => {
    input.textContent

})




