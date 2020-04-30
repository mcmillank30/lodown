'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity:Takes a parameter and returns the value unchanged
 * 
 * @param: {Any Value} value: Can be any value.
 * 
 * @return {Any Value}: Will be the same value as input.
 * 
 */

function identity(value){
    
    return value;
}
module.exports.identity = identity;









/**
 * typeOf:Takes a value, and returns a string representation of that value input
 * 
 * @param {Any Value} value: Can be any value.
 * 
 * @return {string}: a string representation of that value input
 * 
 */


function typeOf(value){
    
    if (value === null){
        
        return "null"
        
    }else if (Array.isArray(value)){
        
        return 'array'
    }else if (typeof value === "object" && value instanceof Date !== true){
        
        return 'object'
    }else{ 
        
        return typeof value
   
    }
}

module.exports.typeOf = typeOf;




/**
 * first: Takes an array and number as parameters. Returns the first input number of array elements
 * If number not given, returns the first element of array
 * If input array, not an array, returns []
 * 
 * @param {Array} array: The array to iterate over and return begin of.
 * @param {Number} value: The number of elements to return from begining of array
 * 
 * @return {Array}: returns an array which includes the input number elements from begining of array
 * 
 */

function first(array, number){
  
  var resultsArr =[]  
    if(Array.isArray(array) === false){
        
        return [];
        
    }else if ( number === undefined || isNaN(number) === true){
        
        return array[0];
        
    }else{
        
        for(var i = 0; i < array.length; i++){
            
            if(i > -1 && i < number){
                
                resultsArr.push(array[i])
            }
        }
    }
 return resultsArr;   
}

module.exports.first = first;







/**
 * Last: Takes an array and number as parameters. Returns the last input number of array elements
 * If number not given, returns the last element of array
 * If input array, not an array, returns []
 * 
 * @param {Array} array: The array to iterate over and return end of.
 * @param {Number} value: The number of elements to return from end of array
 * 
 * @return {Array}: returns an array which includes the input number of elements from end of array
 * 
 */


function last(array, number){
  var lastElements;
    if(Array.isArray(array) === false || number < 0){
        
        return [];
    
        
    }else if ( number === undefined || isNaN(number) === true){
        
        return array[array.length - 1];
        
    }else{
        return lastElements = array.slice(-number)
    }
 
}


module.exports.last = last;










/**
 * indexOf: Takes an array and value as parameters. Returns the index in array that is the first occurrance of value
 * returns -1 if the input value is not in array
 * 
 * 
 * @param {Array} array: The array to iterate over.
 * @param {Any Value} value: The value which to return the index of
 * 
 * @return {Number}: the index of value, or -1 if value is not included in array
 * 
 */




function indexOf(array, value){
    
    for(var i = 0; i < array.length; i++){
        
        if(array[i] === value){
           
           return i
        }
            
    }
    
return -1    
    
    
}


module.exports.indexOf = indexOf;




/**
 * contains: Takes an array and value as parameters. Check if value is included in array
 * 
 * 
 * @param {Array} array: The array to iterate over.
 * @param {Any Value} value: The value which to check for in array
 * 
 * @return {Boolean}: Returns true if value is included in array, and false otherwise
 * 
 */


function contains(array, value){
    
    return (array.includes(value)) ? true : false;
    
    
}


module.exports.contains = contains;





/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */
function each(collection, func){
    
    if(Array.isArray(collection)){
        
        for(var i = 0; i < collection.length; i++){
            
            func(collection[i], i, collection);
            
        }
        
        
    }else if (collection instanceof Date === false && collection !== null){
        
        for(var key in collection){
            
            func(collection[key], key, collection);
            
        }
        
    }
    
}

module.exports.each = each;







/**
 * unique: Takes an array as a parameter. 
 * Returns new array without duplicate values
 * 
 * @param {Array} array: The collection over which to iterate.
 *
 * @return {Array}: Returns a new array with all duplicates removed
 */
 
 
function unique(array){
    
    var result = []
    
    for(var i = 0; i < array.length; i++){
        
            if(indexOf(array, array[i]) === i){
                
                result.push(array[i]);
                
            }
    }
return result;   
}
 
 
 
module.exports.unique = unique;
 
 
 
 
/**
 * filter: interates over array calling input function for each element in input array,
 * passing the arguments: the element, it's index, array
 * 
 * @param {Array} array: The collection to iterate over.
 * @param {function}func: The Function to be applied to each value in the array
 * @return {array} returns a new array of elements for which calling function returned true
 * 
 */
 
function filter(array, func){
     
     var arr = []
     
         each(array, function (value,index,collection){
        
        if(func(value,index,collection)){
            arr.push(value);
        }
    });
    return arr;
};
 
 
 
 
 module.exports.filter = filter;
 
 
 
 
 
/**
 * reject: interates over array calling input function for each element in input array,
 * passing the arguments: value, index, array
 * 
 * @param {Array} array: The collection to iterate over.
 * @param {function}func: The Function to  apply to each value in the array
 * @return {array} returns a new array of elements for which calling function returned false
 * 
 */
 
function reject(array, func){
var arr = []
     
      each(array, function (value,index,collection){
        if(!func(value,index,collection)){
            arr.push(value);
        }
    });
return arr;


}

 
 
 module.exports.reject = reject;
 
 
 
 
/**
 * partition: interates over array calling input function for each element in input array,
 * passing the arguments: value, index, array. Returns array with two arrays inside.
 * One array containing all the values that return truth from function
 * One array containing all the values that return falsey from function
 * 
 * @param {Array} array: The collection to iterate over.
 * @param {function}func: The Function to apply to each value in the array
 * @return {array} returns an array which includes two sub arrays 
 * 
 */
 
function  partition(array, func ){
     
var arr = []     
    
    arr.push(filter(array, func),reject(array, func))    
     
return arr;
 }
 
 
 
 
  
 module.exports.partition = partition;
 
 
 
 
 
 
 
/**
 * map: interates over array calling input function for each element in input array,
 * 
 * @param {Array} array: The collection to iterate over.
 * @param {function}func: The Function to apply to each value in the array
 * @return {array} returns an array which includes a value for each element in input array,after being passed throught input function
 * 
 */
 
function map(collection, func){
var arr = []   
    
     each(collection, function (value,index,collection){
        var val = func(value,index,collection)
            arr.push(val); 
     });
return arr
    
}

 
 
 module.exports.map= map;
 
 

/**
 * Pluck: interates over array of objects, and returns values of given property element in array
 * 
 * @param {Array} array: The collection to iterate over.
 * @param {String}string: Property to look for in each object
 * @return {Array} returns an array which includes the values of peropety for each element in array
 * 
 * 
 */
 
 
 
function pluck (array, string){
  var arr = [];  
 map(array, function(value, index, collection){
      for(var keys in value)
       if(keys === string){
       arr.push(value[keys]);       
       }
  }) 
  return arr;  
 };

 
 
 
 
  module.exports.pluck= pluck;
 
 





 
/**
 * every: Takes a collection, and function as params.
 * Calls function passing every element of collection with params(element, index, array).
 * If function returns true for every element in collection, then boolean true is returned from function 
 * If one element returns false, the boolean false is returned from function
 * If no function is given, returns true if every element is truthy, otherwise returns false
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the collection
 * 
 * @return{Boolean} returns true if every value passed to function returns true; returns false otherwise
 * 
 * 
 * 
 */
 
 
function every(collection, func){
var arr = [];

each(collection, function(value, index, array){
     if(func === undefined){
        if(value === true){
           arr.push(true)
        }else if (value === false){
           arr.push(false)
        }
     }else if(func(value, index, array)=== true){
          arr.push(true)
     }else if(func(value, index, array)=== false){
            arr.push(false)
     } 
 });
return !contains(arr, false)  
};
 
 
 
  module.exports.every= every;
 
 
 
 
 
 
 
 
 
 
 
/**
 * Some: Takes a collection, and function as params.
 * Calls function passing every element of collection with params(element, index, array).
 * If function returns true for any values in collection, then boolean true is returned from function 
 * otherwise, the boolean false is returned from function
 * If no function is given, returns true if any element is truthy, otherwise returns false
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the collection
 * 
 * @return{Boolean} returns true if any values passed to function returns true; returns false otherwise
 * 
 * 
 * 
 */
 
 
function some(collection, func){
 var arr = [];   
    
   each(collection, function(element, index, array){
        
        if(!func) {
            if(element){
                arr.push(true)
            }else{
                arr.push(false)
            }
        }else if (func(element, index, array) === true){
            arr.push(true)
        }else if (func(element, index, array) === false){
            
        }
    })
return contains(arr, true)    
};

 
  module.exports.some= some;
 
 
 
 
/**
 * reduce: Takes an array, function and seed as parameters.
 * Passes (prev element, element, index) to function
 * Uses return value of previous function call for next interation
 * Uses seed on first iteration
 * If no seed is provideed, uses first element of colletion as seed
 * action Function to each value in the collection.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the collection
 * @param{Any Value} seed: The data type we wish to return
 * 
 * @return{Any Value} The value being returned from reduce function
 * 
 * 
 * 
 */
 
 
function reduce(array, func, seed){
    
    each(array, function(element, index, arr){
        
        if(seed === undefined){
            
            seed = array[0];
        }else if (seed){
            
            seed = func(seed, element, index)
        }
    })
 return seed;   
    
}

 
 
   module.exports.reduce= reduce;
 
 
 
/**
 * extend: Takes multiple object as parameters
 * Interate objects and copies properties of all following object to first object in the order they are passed, then returns updated object.
 * 
 * @param { Object} object: The collection over which to iterate.
 * @return {object} returns an object with all the properties of the objects that follow the first
 * 
 * 
 * 
 * 
 */
 
 
 
function extend(object){
     
    each(arguments, function(element, index, array){
         
         Object.assign(object, element)
         
     })
return object     
 }
 
 
 
 
 
  module.exports.extend= extend;