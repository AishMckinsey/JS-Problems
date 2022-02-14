function makeImportant(sentence, count = sentence.length){
    sentence+= '!'.repeat(count);
    return sentence;
}

module.exports = makeImportant;


/* module.exports = (string, count = string.length) => string +"!".repeat(count); */