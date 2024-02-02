// console.log('Hello World');
// console.log(5);


// variable 

// var x = 5; //declaration
// x = 12;

// console.log(x);

//  variable naming


// valid name
// var x = 7;
// var age = 25;
// var name = 'Anik Mondal';



// invalid name

// var 1dal = 1;
// var my-name = 'alklajdff';
// var my-age = 25;
// var for = 10;


// data types


// var age = 25; // number
// var name = 'anik'; // string
// var isTrue = true; // boolean


// var x = 25.125;
// var y = parseInt(x);
// console.log(y);



// var num = '12.25';
// var num1 = parseFloat(num);
// console.log(parseInt(num1));

// var number = '25.23157';


// console.log(typeof number);

// var floating = parseFloat(number);
// var integer = parseInt(floating);
// var fixed = floating.toFixed(2);



// console.log(floating);
// console.log(integer);
// console.log(parseFloat(fixed));


// var x = 5;
// var y = 10;
// var z = x + y;

// var x = x + 1;
// console.log(x);



// console.log(z);


// var x = 5;
// x = x + 1;
// x += 1;
// x++; //post increment
// ++x; //pre increment


// var x = 5;


// console.log(x++); // print hocce 5 tarpor bartece 1 = 6
// console.log(++x); // print hocce 6 tarpor bartece 1 = 7


// var z = 10;

// console.log(++z);
// console.log(++z);


// array 

// var arr = [10, 30, 15, 230, 30];

// console.log(arr.length);
// console.log(arr[2]);
// console.log(arr.indexOf(10));

// var num1 = arr[0];
// console.log(num1);

// var haSan = ['sadia', 'nadia'];

// haSan.push('jorina');
// haSan.push('sokina');
// haSan.push('sumaiya');


// console.log(haSan);

// var ex = haSan.pop();
// haSan.pop();

// console.log(haSan);
// console.log(ex);


// var age = 25;


// if(age >= 18){
//     console.log('you are adult');
// }else{
//     console.log('tumi bacca aco');
// }


// var mark = 60;

// switch(mark){
//     case 80:
//         console.log('your get A+');
//         break;
//     case 70:
//         console.log('your get A');
//         break;
//     case 60:
//         console.log('your get A-');
//         break;
//     case 50:
//         console.log('your get B');
//         break;
//     default:
//         console.log('your fail');    
// }


// var mark = 57;


// if(mark >= 80){
//     console.log('your are get A+');
// }else if(mark >= 70){
//     console.log('your are get A');
// }else if(mark >= 60){
//     console.log('your are get A-');
// }else if(mark >= 50){
//     console.log('your are get B');
// }else{
//     console.log('your are fail');
// }


// var temperature = 25;
// var isRaining = true;

// if(temperature > 30){
//     console.log('It is a hot day');
//     if(isRaining === true){
//         console.log("but it is raining");
//     }else{
//         console.log('It is not raining');
//     }
// }else{
//     console.log('It is a cold day');
//     if(isRaining === true){
//         console.log("but it is raining");
//     }else{
//         console.log('and It is not raining');
//     }
// }


// var i = 1;

// while( i <= 100){
//     console.log('Um sorry ..... = ', i);
//     i++;
// }


// for(let i = 0; i <= 10; ++i){
//     console.log('Um sorry ... =', i);
// }


// var arr = [10, 20, 30, 50, 80, 100];

// console.log(arr.indexOf(50));
// console.log(arr.indexOf(200));

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     if(arr[i] === 50){
//         break;
//     }
// }



// let i = 0;


// while(i < arr.length){
//     console.log(arr[i]);
//     if(arr[i] === 50){
//         break
//     }
//     i++;
// }


var arr = [10, 20, 30, 50, 80, 100];

// for(var i = 0; i < arr.length; i++){
    
//     if(arr[i] === 50){
//         break;
//     }
//     console.log(arr[i]);
// }


// for(var i = 0; i < arr.length; i++){
    
//     if(arr[i] === 50){
//         continue
//     }
//     console.log(arr[i]);
// }



// let i = 0;

// while( i < arr.length){
//     if(i === 3){
//         break;
//     }
//     console.log(arr[i]);
//     i++;
// }


// var x = 5;

// if(x === 5){
//     console.log('equal to 5');
// }else{
//     console.log('not equal to 5');
// }


// var raining = false;
// var umbrella = true;

// if(raining === true && umbrella === true){
//     console.log('baire jabo');
// }else{
//     console.log('jabo na baire');
// }


// var raining = true;
// var umbrella = false;

// if(raining === false || umbrella === true){
//     console.log('baire jabo');
// }else{
//     console.log('jabo na baire');
// }


// var x = 10;
// var y = 4;

// console.log(x / y);


// var x = 10;
// var y = 4;
// var remain = x % y;


// console.log(remain);



// anik vai biya korbe. per bus 50, per car 11, badbaaki jabe  rikshaw per person 70 



// var peplos = 5321;

// var carPeplos = peplos % 50;
// var rikshawPeplos = carPeplos % 11;
// var totalVara = rikshawPeplos * 70;

// console.log(totalVara);



// ternary operator


// var raining = true;

// raining === true ? console.log('baire jabo na') : console.log('barie jabo')



// if(raining === true){
//     console.log('baire jabo na');
// }else{
//     console.log('barie jabo');
// }


var age = 25;
var hasLicense = true;


// age >= 25 ? hasLicense === false ? console.log('adult with license') : console.log('adult but has no license') : console.log('you are not adult')


age >= 18 ? hasLicense === false ? console.log('adult with license') : console.log('adult but has no license') : console.log('you are not adult')










// if(age >= 18){
//     if(hasLicense === true){
//         console.log('adult with license');
//     }
//     else{
//         console.log('adult but has no license');
//     }
// }else{
//     console.log('you are not adult');
// }