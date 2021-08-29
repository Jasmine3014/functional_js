function sayname(name){
    return "Hello" + "," + name ;
}
//a finction can be passed in variable
 var hello = sayname;
//console.log (hello("jasmine"));
var anotherhello = hello;
console.log (anotherhello ("jasmine akter"));

// a finction can be stored in array
var arr=[1,2,3,anotherhello]
arr.push(sayname);
console.log(arr);
