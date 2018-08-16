//Template Literals
let name = 'Andy';
let age = 23;
const content = `Hi,My name is ${name} and I'm ${age} year old`;
console.log(content);

//Arrow Function & 預設值
var add = (a = 1,b = 1) => a+b;
console.log("ADD =" + add(1,2));
console.log("ADD Default =" + add());
//等於以下
// var add = function(a,b){
//   return a+b;
// }

//Block Scope
if(true){
  var temp1 = "test";
  let temp2 = "test2";
}
console.log("var = " + temp1);
//console.log("let = " + temp2);


//JS Little Tips
var one = 1;
var two = 2;
var three = '3';
console.log(''.concat(one, two, three));
console.log(typeof(+three));
//二維陣列合併為單一陣列
var tempArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]]; 
console.log([].concat.apply([], tempArray));
//透過es6完成最大最小值
var tempNumbers = [1, 2, 3, 4];
console.log(Math.max(...tempNumbers));
console.log(Math.min(...tempNumbers));
//短路求值
/*
if(tset == 1){
  Dosomething();
}
可以這樣寫：
tset == 1 && Dosomething();

if(!test){
  test = 1;
}
可以這樣寫：
test = test || 1;

//判斷多個值
if(test==11 || test==22 || test==33 || test==44 || test==55 || test==66){
    Dosomething();
}
可以這樣寫：
if([11, 22, 33, 44, 55, 66].indexOf(test) != -1){
    Dosomething();
}
*/