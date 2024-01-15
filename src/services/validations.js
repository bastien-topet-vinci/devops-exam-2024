// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) =>{
    const specialCharacter = ['&','$','!','è','§','à','_'];
    for (let i = 0; i< 7; i++){
        if (gamertag.includes(specialCharacter)){
        return true;
    }
    }
    

    if (gamertag.length <= 8){
        return true;
    }
    return false;

}

exports.isValid = isValid;
