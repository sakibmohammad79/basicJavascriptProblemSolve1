/*---------------------
Problem 4: Finding Bad data
description: user can input some positive and negative number. If any number is negative we will call it "Bad Data" and we count the value of badData then returns the value. And when user input a string or number value then its give a warning!
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
let data = [23,12,34,34,0, -23,-5,-34];
let badDataresult = findingBadData(data);
console.log(badDataresult);