/*function outter(){
    function inner(){
        console.log("i am inner function")
    }
    console.log("i am outer function")
}
outter();*/
function add(a,b){
    function sum(){
        return a+b
    }
    function sub(){
        return a-b
    }
    function mul(){
        return a*b
    }
    return sum() + sub() + mul()
}
console.log(add(7,5))

