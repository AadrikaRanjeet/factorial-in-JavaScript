//const prompt=require("prompt-sync")();
//TO Find factors of a number
var number=prompt("Enter a number");
if(number ===1||number===0)
{
 console.log(number);   
}
else{
    for(var i=1;i<number;i++)
    {
        if(number%i ===0)
        {
            console.log(i+" "+",");
        }
    }
       
}
 

