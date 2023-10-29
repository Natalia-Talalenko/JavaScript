
let a1 = 5 % 3;
console.log(typeof(a1));
let a2 = 3 % 5;
console.log(typeof(a2));
let a3 = 5 + '3';
console.log(typeof(a3));
let a4 = '5'- 3;
console.log(typeof(a4));
let a5 = 75 + 'кг';
console.log(typeof(a5));
let a6 = 785 * 653;
console.log(typeof(a6));
let a7 = 100 / 25;
console.log(typeof(a7));
let a8 = 0 * 0;
console.log(typeof(a8));
let a9 = 0 / 2;
console.log(typeof(a8));
let a10 = 89 / 0;
console.log(typeof(a10));
let a11 = 98 + 2;
console.log(typeof(a11));
let a12 = 5 - 98;
console.log(typeof(a12));
let a13 = (8 + 56 * 4) / 5;
console.log(typeof(a13));
let a14 = (9 - 12) * 7 / (5 + 2);
console.log(typeof(a14));
let a15 = +"123";
console.log(typeof(a15));
let a16 = 1 || 0;
console.log(typeof(a16));
let a17 = false || true;
console.log(typeof(a17));
let a18 = true > 0;
console.log(typeof(a18));


let width = '10см';
let heigth = '23см';
let SPryam = parseInt(width)*parseInt(heigth);
console.log (SPryam);

let h = 3.14;
let heigth2 = '10м';
let VCilindra = parseFloat(h)*parseInt(heigth2)*(Math.pow(a7, 2));
console.log (VCilindra.toFixed(2));

let r = '5см';
let SKruga = (Math.pow(parseInt(r), 2));
console.log (SKruga);

let s = 2000000;
let p = '10%';
let years = 5;
let Pereplata = s*(parseInt(p)/100)*5;
console.log (Pereplata.toFixed(2));

let g = `Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.

Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:

"А ну-ка, спой!.."- и я пою.`;
console.log (g);

let b = 'и земля зашаталась под ногами-и вырос,';
let c = 'и заревел он голосом диким...';
let d = 'блеснула молния и ударил гром,';
let e = 'какое-то чудище, страшное и мохнатое,';
let f = 'как будто из-под земли, перед купцом:';
let l = 'Он подошёл и сорвал аленький цветочек.';
let k = 'зверь не зверь, человек не человек,';
let m = 'В ту же минуту, безо всяких туч,';
let text = l+m+d+b+f+e+k+c;
console.log(text);