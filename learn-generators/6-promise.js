//Exercise 6
/*
Write run function that gets a generator as an argument, starts it and
yields promise value foo. Use run from callback exercise as a example.

Follow this boilerplate:
*/
function getFoo () {
    return new Promise(function (resolve, reject){
      resolve('foo');
    });
  }

  function run (generator) {
    var it = generator();

    function go(result) {
      // take a look also on `Generator.prototype.return`
      if (result.done) return result.value;

      return result.value.then(function (value) {
        return go(it.next(value));
      }, function (error) {
        return go(it.throw(error));
      });

    }

    go(it.next());
  }

  run(function* () {
    try {
      var foo = yield getFoo();
      console.log(foo);
    } catch (e) {
      console.log(e);
    }
  });