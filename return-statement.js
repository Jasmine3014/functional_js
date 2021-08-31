function name(firstname,lastname,gender){
    var output;
    if(gender=='male'){
        output = console.log('mr ' +  firstname   + lastname)
    }
    else if(gender=='female'){
       output= console.log('ms '  +  firstname + ' '+   lastname)
    }
    return output
}
var result = name( 'jasmine', 'akter','female')
console.log(result)