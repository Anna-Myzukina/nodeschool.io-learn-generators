//Exercise 5
/*Add error handling to this boilerplate. Teach run to throw an exception and
catch that in generator. firstFile should be null if it doesn't exist.
Follow this boilerplate:
*/
var fs = require("fs");

function run(generator) {
    var it = generator(go)

    function go(err, result) {
        if (err) return it.throw(null)
        it.next(result)
    }
    go()
    // improve `run` above
}

run(function* (done) {
    // catch exception
    try {
        var dirFiles = yield fs.readdir("NoNoNoNo", done); // No such dir
    } catch (e) {
        console.log(e)
    }

    var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
    console.log(firstFile);
});