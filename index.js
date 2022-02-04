// 1. ways to write 
// alert("oye kya krra h");
// document.write("this is document write");

// 2. console api 
// console.log("hello world555", 9 ** 9);
// console.warn("this is a warning");
// console.error("this is a error");

// 3. variables
// var no1=50;
// var no2=133;
// console.log(no1+no2);

// 4. data types 
// var str="this is a string";
// var marks="kartik: 100, gupta:99,anurag:89";
// var a =true;
// var undefined;
// var n = null;
// var arr=[1,2,3,4,50];
// console.log(arr);

// 5.operators
// console.log(arr[0]<n);
// console.log(true||false);
// console.log(!true);

// 6.functions
// function avg(a,b){
//     return (a+b)/2;
// }
// console.log(avg(5,10));

// 7.conditonals, loop
// if(){
// }
// else if(){
// }
// arr=["dejfbdf",5,73,5,35,4];
// console.log(arr);
// for (var i= 0; i< arr.length; i++) {
//     console.log(arr[i]);
// }
// arr.forEach(function(element) {
// console.log(element);  
// })
// let j =0;
// console.log(arr.length);
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }
// console.log(j);
// do(){
// }while()

// 8.array methods

// break,continue;

// console.log(arr.length);
// arr.pop();
// arr.push("lll");
// arr.unshift("kyu");
// console.log(arr);

// 9.string methods
// let string='i want to play football';
// console.log(string.length);
// console.log(string.indexOf("a"));
// console.log(string.lastIndexOf("a"));
// console.log(string.slice(0,9));
// d=string.replace("i","you");
// console.log(d);

// 10.dates
// let mydate=new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());

// 11.dom manipulation
// let elem=document.getElementById('click');
// console.log(elem);
// let elemclass=document.getElementsByClassName('container');
// console.log(elemclass);
// elemclass[0].style.background = "yellow";
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text-success");
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
// tn=document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText ="this is a created para";
// created2Element = document.createElement('b');
// created2Element.innerText ="this is a created bold";
// tn[0].appendChild(createdElement);
// tn[0].replaceChild(created2Element,createdElement);

// selectig using query
//  sel = document.querySelector('.container');
// console.log(sel);
//  sel = document.querySelectorAll('.container');
// console.log(sel);

// // Events handling in javascript
// function clicked(){
//     console.log('button was clicked');
// }
// window.onload=function(){
//     console.log('loaded');
// }
// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked</b>"
//     console.log('click container')
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log('Mouse on  container')
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log('Mouse out container')
// })
// let prevhtml = document.querySelectorAll('.container')[0].innerHTML;
// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[0].innerHTML= prevhtml
//     console.log('Mouse up after click')
// })
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked</b>"
//     console.log('Mouse down while click')
// })

// Arrow functions
// function sum(a,b){
//     return a+b;
// }
// sum = (a,b) =>{
//     return a+b;
// }
// settimeout and setinterval
// logkaro = ()=>{
//     console.log('logkaro function')
// }
// clr = setTimeout(logkaro,5000);
// clr =setInterval(logkaro,2000);
// clearInterval/clearTimeout for cancelling

// javascript local storage
// localStorage.setItem('name','kartik');
// localStorage.clear;
// localStorage.removeItem();
// localStorage.getItem('name');

// JSON
// obj = {name : "karry ",length :1, a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof(jso));
// parsed = JSON.parse(`{"name":"karry ","length":1,"a":{"this":"that"}}`)
// console.log(parsed)
// console.log(typeof(parsed))

// Template literals- backticks
// a= 34;
// console.log(`a is my ${a}`)

