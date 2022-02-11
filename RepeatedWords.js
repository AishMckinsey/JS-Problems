function RepeatedWords(sentence){
    let words = sentence.split(" ");

    let mapWords = {};

    let ans = false;
    let repeatedArray = [];

    for(let i=0;i<words.length;i++){
        let currWordCount = mapWords[words[i]];
        let count = currWordCount ? currWordCount : 0;

        mapWords[words[i]] = count + 1;

        if(mapWords[words[i]]>1){
            ans = true
            repeatedArray.push(words[i])
        }
    }
    return repeatedArray
}

let sentence;
//sentence = "Repeated words count is taken into count and stored in words"
//sentence = "Repeated words count is taken into account and stored in array"
//sentence = ""
//sentence = "repeated Repeated"
//sentence = [123, 123, 123, 123, 123]
//sentence  = "123 123 0123 12 234"
//sentence  = "-123 123 0123 12 234"


console.log(RepeatedWords(sentence));