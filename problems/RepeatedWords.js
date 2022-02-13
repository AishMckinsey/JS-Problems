



function RepeatedWords(sentence){
    let words = sentence.split(" ");

    let mapWords = {};

    let isPresent = false;
    //let repeatedArray = [];

    for(let index = 0 ; index < words.length ; index ++ ) {
        const currWordCount = mapWords[words[index]];
        const count = currWordCount ? currWordCount : 0;

        mapWords[words[index]] = count + 1;

        if(mapWords[words[index]]>1){
            isPresent = true
           // repeatedArray.push(words[index])
        }
    }
    return isPresent
}

let sentence = "Repeated words count is taken into count and stored in words";
if(RepeatedWords(sentence))
    console.log("Words are repeated");
else
    console.log("Words are not repeated");







//sentence = "Repeated words count is taken into count and stored in words"
//sentence = "Repeated words count is taken into account and stored in array"
//sentence = ""
//sentence = "repeated Repeated"

//sentence  = "123 123 0123 12 234"
//sentence  = "-123 123 0123 12 234"
//sentence = "repeat|repeat,repeat"
//sentence = 123
//sentence = [123, 123, 123, 123, 123]
//sentence = "Hey! Hey"