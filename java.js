"use strict"

let arr;
let i;

// task 1

{/*
    arr = [1,2,3,4,5];

    for ( let i = 0; i < arr.length ; i++ ) {
        console.log(arr[i]);
    }*/
}

// task 2 

{/*
   arr = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] <= -10 || arr[i] >= -3) continue; {
        console.log(arr[i]);
        }
    }*/
}

// task 3

{/*
    arr = [];

    for ( i =23; i <= 57; i++ ){
        arr.push(i);
    }
    console.log(arr)

    i = 23;
    while (i <= 57){
    i++;}
    console.log(arr)

    let sum = 0;
    for ( i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);*/
}

// task 4
{/*
arr = ['10', '20', '30', '50', '235', '3000'];

for ( i = 0; i < arr.length; i++) {
  let num = arr[i];
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}*/
}

// task 5

{/*
    arr = ['ПН ','ВТ ','СР ','ЧТ ','ПТ ','СБ ','ВС '];
    
    for ( i = 0; i < arr.length; i++) {
        if (i > 4){
            document.write(`<b> ${arr[i]} </b>`);
            console.log(`<b> ${arr[i]} </b>`);
    } else {
    document.write(arr[i]);
    console.log(arr[i])}
}*/
}

// task 6

{/*
    arr = [4, 467, 345, 7, 'love'];

    arr.push('HAPPY');
    console.log(arr);
    console.log(arr[arr.length - 1]);*/
}

// task 7

{/*
    arr = [];

    while (true) {
        let num = prompt ("Введите число (пустую строку для завершения):");
        console.log(num);
        arr.push(num);
            if ( num === '' || num === null ) {
            break;
            } 
        }

    console.log(arr);
    const res = arr.sort((a, b) => a - b );
   
    console.log(res);*/
}

// task 8

{/*
    arr = [12, false, 'Текст', 4, 2, -5, 0];

    let n = arr[i];
    let rev = [];
    i = arr.length-1;
    while (i >= 0) {
        console.log(arr[i]);
        rev.push(arr[i]);
        i--;
    }
    console.log(rev);


    rev = arr.reverse();
    console.log(rev);*/
}

// task 9

{/*
    arr = [5, 9, 21, , , 9, 78, , , , 6];

    let sum1 = 0;
    let sum2 =0;

    for ( i = 0; i < arr.length; i++)
    {
        if ( typeof arr[i] === 'undefined' )
        {
        sum1++;
        }
    }
    console.log(sum1);


    for (let item of arr) {
        if ( item === undefined)
        {
        sum2++;
        }
    }
    console.log(sum2);*/
}

// task 10

{/*
    arr = [1,8,0,13,76,8,7,0,22,0,2,3,2];

    let a = arr.indexOf(0);
    console.log( arr.indexOf(0));

    let b = arr.lastIndexOf(0);
    console.log(arr.lastIndexOf(0));

    let arrNew =[];
    arrNew = arr.slice(a,b);
    console.log(arrNew);
    let sum = 0;

    for ( let i = 0; i < arrNew.length; i++ ){
        sum += arrNew[i];
    }
    console.log(sum);*/
}

