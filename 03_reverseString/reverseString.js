const reverseString = function(string) {

    let i = 0;
    let a = [];

    while ( i < string.length) 
    {

        a.push(string[string.length-i-1]);
        i++

    }
    return a.join('');


};

// Do not edit below this line
module.exports = reverseString;
