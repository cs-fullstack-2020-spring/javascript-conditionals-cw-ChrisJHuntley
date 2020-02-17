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
// // !! you should be checking if the SUM of the two numbers is EVEN not if the values are equal
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
// !! use `else if(condition)` to check for multiple conditions
if(word1!=word2 || word1!=Answer || word2!=Answer){
    console.log("Locked Out"); // this should be you else action (if all other conditions are false)
}
if(word1==word2 && word1!=Answer|| word2!=Answer){ // you don't need that last condition bc if word1 and word2 are equal BOTH of them are either equal or not equal to Answer
    console.log("You only got in because your words matched");
}
if(word1!=word2 && word1==Answer || word2==Answer){
    console.log("You only got in because one of your words matched the secret word");

}

