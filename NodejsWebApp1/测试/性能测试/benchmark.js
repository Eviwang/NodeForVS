"use strict";
const bc = require("benchmark");
var suite = new bc.Suite();
// add tests 
suite.add('RegExp#test', function () {
    /o/.test('Hello World!');
})
    .add('String#indexOf', function () {
    'Hello World!'.indexOf('o') > -1;
})
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
    .run({ 'async': true });
//# sourceMappingURL=benchmark.js.map