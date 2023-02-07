/*---------------------
Problem 3: Is Less or Greater than seven
Description: You need to find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. Means twice the number you took as input. And when user input a string value then its give a warning!
-----------------------*/
function isLGSeven(number){
    if(typeof(number)!=='number'){
        console.log('Please Enter A valid number')
    }
    else{
        
    let differenceValue =(number-7);
    if(differenceValue>7){
        let doubleInfutValue = (number*2);
        return doubleInfutValue;
    }
    else{
        return differenceValue;
    }
    }
}
const result = isLGSeven(15);
console.log(result);
