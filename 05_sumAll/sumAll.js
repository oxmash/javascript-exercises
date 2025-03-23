const sumAll = function(a,b) {

    let c =[];
    let sum = 0;
    if(a==b && typeof a === "number" && typeof b === "number" && a % 1 == 0 && b % 1 == 0)
        {
            return a;
        }
    else if(a<b && typeof a === "number" && typeof b === "number" && a % 1 == 0 && b % 1 == 0)
        {

            if (a<0 || b<0)
            {
                return 'ERROR'

            }

           while(a<b)    
           {    let i = 0;
                c.push(a);
                a= a+1;
                i++;
            }
        }
     else if (b<a && typeof a === "number" && typeof b === "number" && a % 1 == 0 && b % 1 == 0)
     {
        if (a<0 || b<0)
            {
                return 'ERROR'

            }

           while(b<a)    
           {    let i = 0;
                c.push(b);
                b++;
                i++;
            }

     }

    else 
        {

            return 'ERROR';
        }

        for (i = 0;i<c.length;i++)
        {   
             sum = c[i] + sum;
        }
        if (a>b)

        {return sum+b;}
        else 
        {return sum+a;}

};

// Do not edit below this line
module.exports = sumAll;
