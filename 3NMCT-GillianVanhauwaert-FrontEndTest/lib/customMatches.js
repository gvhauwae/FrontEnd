/**
 * Created by Gillian on 26/10/2016.
 */
var customMatchers = {
  toBeOfType: function(){
      return{
          compare: function(actual, expectedType){
              var str = actual.constructor.toString();
              //function FlickrPhoto(){}
              var typeOfActual = str.substring(9,str.indexOf('('));
              return{
                  pass: typeOfActual === expectedType
              }
          }
      }
  },
    toHaveProperty: function(){
        return{
            compare: function(actual, propertyName){
                var isOK = actual.hasOwnProperty(propertyName);
                return{
                    pass:isOK
                }
            }
        }
    }
};

beforeEach(function(){
    jasmine.addMatchers(customMatchers);
});

