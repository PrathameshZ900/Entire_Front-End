// Reverse the words of a string contain multiple words 


let str = "Javascript is fun";

function Reverse(word){

    let rest = "";

    for(let i = word.length - 1; i >= 0; i--){
        rest += word[i];
    }

    return rest;


}

function ReverseWords(str){

    let arr = str.split(" ");

    let ans = ""

    for(let i = 0; i < arr.length; i++){

        ans += Reverse(arr[i])+" ";

    }

    return ans.trim()
  

}

console.log(ReverseWords(str))