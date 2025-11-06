// # Print all even number from 0 to 100
for(let i = 0; i <=100; i++){
    if(i % 2 ==0){
        console.log(i)
    }
}

// 2. calculate how many vowels and consonants in a given String.
let str= "Hello"
let vowel=0;
let consonant=0;
for(let i of str){
    if (i   == 'a'||i   == 'e'||i   == 'i'||i   == 'o'||str[i]   == 'u' ) {
        vowel = vowel+1
    }
    else{
        consonant = consonant+1
    }
}

console.log(`Total Vowel in ${str} is : ${vowel} and total consonants are ${consonant}`)