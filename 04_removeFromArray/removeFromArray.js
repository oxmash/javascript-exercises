const removeFromArray = function(a,...Multi_args) {

    let b = [];
    for (let i=0; i< a.length; i++)
    {       
            for(let j=0;j<Multi_args.length;j++)
            {
            if (a[i]===Multi_args[j])
            {
               
                b.push(i);
            } 
            }        
    }
    for (let i = b.length - 1; i >= 0; i--) 
        {
        a.splice(b[i], 1);
    }

    return a;
}


// Do not edit below this line
module.exports = removeFromArray;
