/**
 * User: mater(materliu@gmail.com)
 * Date: 11/23/13
 * Time: 9:23 AM
 */

!(function (factory) {
    if (typeof define === "function") {
        define([], factory);1
    } else {
        factory();
    }
})(function() {


    var MathObj = {
        getRandomInt : function() {
            return Math.floor(Math.random() * 10000);
        }
    }

    return MathObj;
});
