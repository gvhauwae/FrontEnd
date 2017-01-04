/**
 * Created by Gillian on 26/10/2016.
 */
beforeEach(function () {
    jasmine.addMatchers({
        toBeBetween: function (min, max) {
            return{
                compare: function(actual, min, max){
                    var result = actual;
                    return{
                        pass: result > min && result<max
                    }
                }

            }
        }
    });
});