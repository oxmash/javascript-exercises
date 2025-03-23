const repeatString = function(string, num) {
    
    if (string == null || num < 0 )
    {
        return "ERROR"
    }
    
    let a = [];
    let i = 0;
    while (i < num) {
        a.push(string);
        i++; // increment i to avoid infinite loop
    }
    return a.join(''); // join with no separator between the repeated strings
};

// Do not edit below this line
module.exports = repeatString;
