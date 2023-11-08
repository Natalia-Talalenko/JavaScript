"use strict"

let arr;

// task 1

{
    arr = [1,2,3,4,5];

    for ( let i = 0; i < arr.length ; i++ ) {
        console.log(arr[i]);
    }
}

// task 2 

{
    arr = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];

    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] > -10 && arr[i] < -3) continue;
        console.log(arr[i]);
    }
    
}