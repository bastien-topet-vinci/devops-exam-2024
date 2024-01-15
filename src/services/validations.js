// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) =>{
    const specialCharacter = ['&','$','!','è','§','à','_'];
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    for (let i = 0; i< 7; i++){
        if (gamertag.includes(specialCharacter[i])){
            break;
        }
        if (i === 6){
            return false;
        }
    }
    if (gamertag.length < 8){
        return false;
    }
    for (let i = 0; i< 10; i++){
        if (gamertag.includes(numbers[i])){
            break;
        }
        if (i === 9){
            return false;
        }
    }
    return true;


}

exports.isValid = isValid;
