// let anyword=prompt("What is your first word?")
// let word=prompt("What is your second word? ")
// if(anyword==word){
//     console.log("THAT IS CORRECT")

// }
// if(anyword != word){
//     console.log("THAT IS INCORRECT")
// }

// let number= parseInt(prompt("What is your number?"));
// let another=0
// if(number >= another){
//     console.log("Your number is positive");
// }
// if(number<0){
//     console.log("Your number is negative");
// }

 

// let num1=prompt("Give a number?");
// let num2=prompt("Give another number?");
//  if(num1==num2){
//     console.log("Your number is even");
// }
// if(num1!=num2){
//     console.log("Your number is odd")
// }

Answer="secretword"
let word1=prompt("Fitst word");
let word2=prompt("Second word");
if (word1==word2 || word1==Answer ||word2==Answer){
    console.log("You got in but we dont know how!");
}
if(word1!=word2 || word1!=Answer || word2!=Answer){
    console.log("Locked Out");
}
if(word1==word2 && word1!=Answer|| word2!=Answer){
    console.log("You only got in because your words matched");
}
if(word1!=word2 && word1==Answer || word2==Answer){
    console.log("You only got in because one of your words matched the secret word");

}

