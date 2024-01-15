// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) =>{
    const specialCharacter = ['&','$','!','è','§','à','_'];
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
    return true;

}

exports.isValid = isValid;
