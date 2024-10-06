// Vowels and Consonants count in string 

let str = "Hello World!!";

let Vowels = "aAeEiIoOuU";

let Consonants = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ"

function Vowel(i){
    if(Vowels.includes(i)){
        return true;
    }

    return false;
}


function Consonant(i){
    if(Consonants.includes(i)){
        return true;
    }

    return false;
}

function VowelsAndConsonantsCount (str){

    let VC = 0;
    let CC = 0;

    for(let i = 0; i < str.length; i++){
        if(Vowel(str[i])){
            VC+=1;
        }else if(Consonant(str[i])){
            CC+=1;
        }
    }


    return ({"Vowel":VC, "Consonants":CC});

}


console.log(VowelsAndConsonantsCount (str));