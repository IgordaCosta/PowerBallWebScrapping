
const path = require('path');
var Async = require(path.resolve(__dirname, './simplify-async.js')).simpleAsync;



    function test() {
        var promise = new Async();

        setTimeout(() => {
        promise.resolve("Have nice day");
        }, 5000);

        return promise.promise;
    }

test().then((response) => {
    console.log(response)   
}).catch((err) => {
    console.log(err);
});