// Palandrome in string collection ignore spaces, marks 


let str = "A man, a plan, a canal, Panama";


function normal(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    
    let ans = "";

    for(let i = 0; i < str.length; i++){
        if(alpha.includes(str[i]) || alpha.includes(str[i].toLowerCase())){
            ans += str[i].toLowerCase();
        }
    }

    return ans;
}


function Reverse(word){

    let rest = "";

    for(let i = word.length - 1; i >= 0; i--){
        rest += word[i];
    }

    return rest;


}

function CheckPalandrome(str){

    if(Reverse(normal(str)) == normal(str)){
        return true;

    }else{
        return false;
    }


}

console.log(CheckPalandrome(str))