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
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
