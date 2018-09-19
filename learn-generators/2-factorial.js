//Exercise 2
/*fWrite a generator function factorial that, given an input number, starts at 1 and goes
up to the number, yielding the factorial of each number along the way.
Don't use recursion. Use a loop.
Follow this boilerplate:
*/
function *factorial (n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
      result *= i;
      yield result;
    }
  }

  for (var n of factorial(5)) {
    console.log(n)
  }
