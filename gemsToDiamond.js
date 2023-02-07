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
let diamond = gemsToDiamond(100,5,1);
console.log(diamond)