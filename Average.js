function averageArray(ar)
{
    let n = ar.length;
    let sum = 0;
    
    for(let i = 0; i < n; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

let ar = [1, 3, 9, 15, 90];
let avg = averageArray(ar);

console.log("Average: ", avg);