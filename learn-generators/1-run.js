//Exercise 1
/*Write a range generator-function that takes from and to arguments.
Print the numbers as strings within the specified range, one per line.
Follow this boilerplate:
*/
    function *range(from, to) {
      // your code goes here
      var i = from;
      while (i <= to) { yield i++; }
    }
    for (var r of range(5, 10)) {
        console.log( r );
    }
    // should print: 5, 6, 7, 8, 9, 10
 
