function a(callback){
    setTimeout(() => {
        console.log("異步Trigger!");
        callback();
    }, 2000);
}

function b(){
    console.log("2秒後 CallBack Trigger!");
}

a(b);

console.log("同步Trigger!");