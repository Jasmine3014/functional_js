// function host(){
//     console.log("i am host function")
//      return function(){
//         console.log("i am child function")
//     }
// }
// var a = host();
// console.log(a())

//another way
function host(){
    console.log("i am host function")
    function child(){
        console.log("i am child function")
    }
return child;

}
var a = host();
a();

//another example
function greating(msg){
  return function(name){
  console.log(msg+" "+name)//anonymos type return
  
}   
}
var good = greating("good morning")
var hello = greating("hello morning")

good('jasmine');
hello('tripti');



