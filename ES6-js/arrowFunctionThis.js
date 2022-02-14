// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(function () {
//             console.log(this.yelp);
//         });
//     }
// };

var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp)
        );
    }
};
foot.kick();