function isArmstrongNumber(num, numberOfDigits){
    let temp = num;
    let sum =0;
    while(temp>0){
        let rem = temp%10;
        sum += rem ** numberOfDigits;
        temp = parseInt(temp/10);
    }
    return num===sum
}

function printArmstrongNum(num){
    for (let i=1;i<=num;i++){
        let numberOfDigits = i.toString().length;
    
        let sum = 0;        
        
        if(isArmstrongNumber(i, numberOfDigits)){
            console.log(i)
        }
       
        
    }
}



let number = 300
console.log('armstrong numbers are:');
printArmstrongNum(number)
 
//console.log(123=='123')  // just value
//console.log(123==='123') // value and types are checked