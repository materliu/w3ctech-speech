/**
 * User: mater(materliu@gmail.com)
 * Date: 11/23/13
 * Time: 9:21 AM
 */

require.config({
    paths : {
        '$' : './lib/jquery/$'
    }
});

require(["$", "./utils/Math"], function($, Math) {

    window.setInterval(function() {
        $("#showRandom").text(Math.getRandomInt());
    }, 50);

});
