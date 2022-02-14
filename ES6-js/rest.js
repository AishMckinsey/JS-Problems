function average(...args){
    var result = 0, count = 0;
    args.forEach( (value)=> {
        result+=value; count++;
    });
    return result/count;
};

module.exports = average;