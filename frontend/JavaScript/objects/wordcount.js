var text="hello hi hello hi hello"

// var words=text.split(" ");

var word_count={};

// for(let word of words){
//     if(word in word_count){
//         word_count[word]+=1;
//     }
//     else{
//         word_count[word]=1;
//     }
// }

// console.log(word_count);

// text.split(" ").map(word=>word in word_count?word_count[word]+=1:word_count[word]=1)
// console.log(word_count);
for(let word in text){
    console.log(word);
}

