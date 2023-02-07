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
let result = evenOdd('sakib');
console.log(result);