//By reference
var obj1 = {a:1,b:2,c:3};

var obj2 = obj1;

obj2.a = 4;

console.log("obj1 = " + JSON.stringify(obj1));

console.log("obj2 = " + JSON.stringify(obj2));

//DeepCopy

//Object Assign
// var obj1 = {a:1,b:2,c:3};

// var obj2 = Object.assign({},obj1);

// obj2.a = 4;

// console.log("obj1 = " + JSON.stringify(obj1));

// console.log("obj2 = " + JSON.stringify(obj2));

//JSON
// var obj1 = {a:1,b:2,c:3};

// var obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.a = 4;

// console.log("obj1 = " + JSON.stringify(obj1));

// console.log("obj2 = " + JSON.stringify(obj2));

//Jquery
// var obj1 = {a:1,b:2,c:3};

// var obj2 = $.extend(true,{},obj1);

// obj2.a = 4;

// console.log("obj1 = " + JSON.stringify(obj1));

// console.log("obj2 = " + JSON.stringify(obj2));