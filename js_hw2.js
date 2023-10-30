"use strict"

let age;
let day;

// task 1
/*
{
    let name = prompt ('Ваше имя?', 'Меня зовут Счастье');
    console.log(name);
    let age = prompt ('Возраст?', 'Мне 18лет');
    console.log(age);
    let city = prompt ('Город проживания?','Я проживаю в городе Добро.');
    console.log(city);
    let phone = prompt('Мои контактные данные, телефон:', '+375 29 777 77 77');
    console.log(phone);
    let email = prompt('Мои контактные данные, почта:', 'loveLife@gmail.com' );
    console.log(email);
    let company = prompt ('Я работаю в компании:', 'Прекрасная жизнь.');
    console.log(company);
    let sum = `Меня зовут ${name}. Мне ${age}. Я проживаю в городе ${city}. Мои контактные данные: телефон ${phone}, почта ${email}. Я работаю в компании ${company}`;
    console.log(sum);
}

// task 2
{
let year = 2023;
let age = 18;
let birth = year - age;
console.log(birth);
}
*/
// task 3
{
    let d = '722222';
    let sum1;
    let sum2;

   if (sum1 === sum2) { 
    sum1 = (d.slice(0)) + (d.slice(1)) + (d.slice(2));
    sum2 = (d.slice(3)) + (d.slice(4)) + (d.slice(5));
    console.log('Да');
    } else {
    console.log('Нет');
    }
}

// task 4

{
    let a = -3;

    if (a > 0) {
        console.log('верно');
    } else {
        console.log('неверно');
    }
}

// task 5
{
    let a = 10;
    let b = 2;
    let sum = a + b;
    console.log(sum);
    let dif = a - b;
    console.log(dif);
    let prod = a * b;
    console.log(prod);
    let quotient  = a / b;
    console.log(quotient);
    
    let com = sum + dif + prod + quotient;
    let q;
    if (com > 1) {
        q = Math.pow(com, 2);{
            console.log(q);
        }
    }


// task 6

  if (a >5 && a < 11  || b >= 6 && b < 14) {
    console.log('верно');
  } else {
    console.log('неверно');
  }
}

// task 7 

{
    let n = 38;

        if ( n >= 0 && n < 15){
        console.log('первая четверть часа');
        }  
        else if ( n >= 15 && n < 30){
        console.log('вторая четверть часа');
        } 
        else if  ( n >= 30 && n < 45){
        console.log('третья четверть часа');
        }
        else if ( n >= 45 && n <= 59){
        console.log('четвертая четверть часа');}     
}

// task 8

{
    let day = 5;

        if ( day >= 0 && day < 11){
        console.log('первая декада');
        }  
        else if (day >= 11 && day < 21){
        console.log('вторая декада')
        } 
        else if  (day >= 21 && day  <= 31){
        console.log('третья декада');
        }    
}

// task 9
{
let k = 5896;

let year = k/365;
    if (year < 1 ){
        console.log('Меньше года');
    } else {
        console.log(year.toFixed(2));
    }

let month = k/31;
    if (month < 1 ){
     console.log('Меньше месяца');
    } else {
        console.log(month.toFixed(2));
    }

let week = k/7;
if (week < 1 ){
    console.log('Меньше недели');
} else {
    console.log(week.toFixed(2));
}

let hour = k*24;
    console.log(hour);

let minute = k*24*60;
    console.log(minute);

let second = k*24*60*60;
    console.log(second);

}

// task 10
{
    let day = 248;

    if (day >=1 && day <= 31) console.log('Январь.Зима');
    if (day >=32 && day <= 59) console.log('Февраль.Зима');
    if (day >=60 && day <= 90) console.log('Март. Весна');
    if (day >=91 && day <= 120) console.log('Апрель.Весна');
    if (day >=121 && day <= 151) console.log('Май. Весна');
    if (day >=152 && day <= 181) console.log('Июнь. Лето');
    if (day >=182 && day <= 212) console.log('Июль. Лето');
    if (day >=213 && day <= 243) console.log('Август.Лето');
    if (day >=244 && day <= 273) console.log('Сентябрь. Осень');
    if (day >=274 && day <= 304) console.log('Октябрь. Осень');
    if (day >=305 && day <= 334) console.log('Ноябрь. Осень');
    if (day >=335 && day <= 365) console.log('Декабоь. Зима');


}


