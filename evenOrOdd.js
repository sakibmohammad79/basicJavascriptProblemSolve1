/*---------------------
Problem 2: Finding even or odd
Description: The function of this program is to take a text as input and determine if its length is odd or even. And when user input a number or unvalid value its give a warning!
-----------------------*/
function evenOdd(text){
    if(typeof(text)!=='string'){
        console.log('Please Enter A String.')
    }
    else{
        for(let i=1; i<=text.length; i++){
            if(i%2==0){
                textLength = 'even';
            }
            else{
                textLength = 'odd';
            }
        }
        return textLength;
    }
}
let name = evenOdd('sakib');
console.log(name);
