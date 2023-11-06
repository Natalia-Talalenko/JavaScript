"use strict";

let i;
let sum;
//task 1

/*{
i = 1;
while(i<=50) {
    console.log(i);
    i++;
}

i = 35;
while( i>=8 ) {
    console.log(i);
    i--;
}
}*/

//task 2
/*{
     i = 5;
    while(i <= 11) {
        document.write ( `${i}  <br>` );
        i++;
    } 
 }*/

 //task 3

 /*{
    
    let sum = 0;
    for (i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}*/

//task 4

 /*{
    
    let sum = 0;
    for (i = 1; i <= 5; i++) {
        sum = 0 ;
        for (let j = 1; j <= i; j++){
            sum +=j;
        }
        console.log(sum);
    }
}*/

//task 5

/*{
    
    for ( i = 8; i <= 56; i+=2){
        console.log(i);
    }

    i = 8;
    while ( i <= 56 ){
        console.log(i);
        i+=2;
    }
}*/

//task 6 
 /*{
   
    sum = 0;
    for (i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++){
            let sum = i * j ;
            console.log(`${i}*${j}=${sum}`);
        }  
    } 
 }*/

//task 7

/*{
  
    let num = 0;
    for ( let n = 1000 ; n >= 50; n /= 2 ) {
        num++;
        console.log(num);
        console.log(n);  
    }
    
}*/

// task 8
 {/*

    let sum = 0;
    let qt = 0;

    while (true) {
        let num = +prompt("Ввудите число (пустую строку или 0 для завершения):");
        console.log (num);

        if (num === 0) {
            break;
        }

        if (typeof num === 'number' && !isNaN(num)) {s
            sum += num;
            qt++;
            let middle = isNaN (sum / qt) ? 0 : sum / qt;
            console.log(`Общая сумма: ${sum}`);
            console.log(`Среднее арифметическое: ${middle}`);
        } else {
            alter ("Введите число.");
        }
    }*/

 }

 // task 9 

 {/*
    let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
    let max = str[0];
    let min = str[0];
    let st = '';

    for (let i = 1; i < str.length; i++) {
        if (str[i + 1] === ' ') {
            st = Number(str[i - 1] + str[i]);
            if (st > max) { max = st; }
            if (st < min) {
                min = st;
            }    
        }
    }
    document.write (`Исходная строка ${str}<br> min = ${min}, max = ${max}`);*/
 }

 // task 10

 {
    let num = 4587;

    let sum = 0;

    for (let i = 0; i <= String(num).length; i++) {
        console.log(i);
    }
    console.log(`в числе num ${String(num).length} чисел`);

 }