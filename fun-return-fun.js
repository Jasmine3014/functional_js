function host(){
    console.log("i am host function")
     return function(){
        console.log("i am child function")
    }
}
var a = host();
console.log(a())

//another way
