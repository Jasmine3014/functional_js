// arr=[87,90,4,67,23,65,68]
// arr.sort(function(a,b){
// return b-a;
// }
// );
// console.log(arr);

arr=[87,90,4,67,23,65,68]
arr.sort(function(a,b){
return a-b;//accesending
}
);
console.log(arr);

//another example
var people =[
    {name:'jasmine', age:22},
    {name:'yasmine', age:20},
    {name:'runa', age:21}]
people.sort(function(a,b){
    return b.age-a.age })
console.log(people)