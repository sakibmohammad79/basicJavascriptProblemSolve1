/*---------------------
Problem 1: Let’s play a mind game
Description: The meaning of this function is to apply mathematical (Addition,Multiplycation,Divission,subtraction) operations on a positive number, resulting in a final output value. And when user input a negative or unvalid value its give a warning!
----------------------- */
function mindGame(positiveNumber){
    if(typeof(positiveNumber)!=='number' || positiveNumber<=0){
        console.log('Please Enter A Positive and Valid Number.');
    }
    else{
        const multiply = (positiveNumber*3);
        const addition = (multiply+10);
        const divided = (addition/2);
        const finalResult = (divided-5);
        return finalResult;
    }
}

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


/*---------------------
Problem 4: Finding Bad data
description: user can input some positive and negative number. If any number is negative we will call it "Bad Data" and we count the value of badData then returns the value. And when user input a string or number then its give a warning!
-----------------------*/
function findingBadData(data){
    if(Array.isArray(data)!== true){
        console.log('Please enter a Array.')
    }
    else{
        badData = [];
    for(let i=0; i<data.length; i++){
        if(data[i]>=0){
            continue;
            //goodData are continue Because we need to badData and its quantity.
        }
        else{
            badData.push(data[i]);
        }
    }
    return badData.length;
    }
}


/*---------------------
Problem 5: Convert your gems into diamond
description: user can infut Three friends gems quantity. First friend one gems can convert to 21 diamond and second friend one gems can convert to 32 diamond and thirt friend one gems convert to 43 diamond. Then this code convert gems to diamond and return the total diamond quantity. And when user input a string or unvalid value then this function gives a warning!
-----------------------*/
function gemsToDiamond(fistFriendGemsQuantity, secondFriendGemsQuantity, thirtFriendgemsQuantity){
    if(typeof(fistFriendGemsQuantity)!=='number' || typeof(secondFriendGemsQuantity)!=='number' || typeof(thirtFriendgemsQuantity)!=='number'){
        console.log('Please Enter a all valid numbers And assign Three values.');
    }
    else{
    let fistFriendOneGemsPower = 21;
    let secondFriendOneGemsPower = 32;
    let thirtFriendOneGemsPower = 43;

    let firstFrienddiamond = fistFriendGemsQuantity*fistFriendOneGemsPower;
    let secondFrienddiamond = secondFriendGemsQuantity*secondFriendOneGemsPower;
    let thirtFrienddiamond = thirtFriendgemsQuantity*thirtFriendOneGemsPower;

    let totalDiamond = (firstFrienddiamond+secondFrienddiamond+thirtFrienddiamond);
    if(totalDiamond>(1000*2)){
        totalDiamond = (totalDiamond-2000);
        return totalDiamond;
    }
    else{
        return totalDiamond;
    }
    }
}

