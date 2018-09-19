//Exercise 4
/*Write a generator-function upper that takes an array of strings and
yields each of them in upper case.
The problem: some person sent a number into the upper and it's broken.
Please fix it. If upper gets a number it should return null.
Follow this boilerplate
*/
function* upper(items) {
    // your code goes here
    for (let item of items) {
        try {
            yield item.toUpperCase()
        } catch (e) {
            yield null
        }
    }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
    console.log(item);
}
// want to log: A, B, null, C
 