fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, alert) {
      for (const element in arr) {
        alert(arr[element]);
      }
      return arr;
    },

    map: function(arr, cb) {
      let array2 = Object.assign([], arr);
      for (const element in array2) {
        array2[element] = cb(array2[element]);
      }
      return Object.values(array2);
    },

    reduce: function(arr, cb, acc = 0) {
      for (const element of arr) {
        acc = cb(acc, element, arr);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const element in collection) {
        if (predicate(collection[element])) {
          return collection[element];
        }
      }
    },

    filter: function(collection, predicate) {
      let result = [];
      for (const element in collection) {
        if (predicate(collection[element])) {
          result.push(collection[element]);
        }
      }
      return result;
    },

    size: function(collection) {
      return collection.length || Object.keys(collection).length;
    },

    first: function(collection, n = 1) {
      let result = collection.slice(0, n);
      if (n === 1) {
        result = collection[0];
      }
      return result;
    },

    last: function(collection, n = 1) {
      let result = collection.slice(n*-1);
      if (n === 1) {
        result = collection[collection.length-1];
      }
      return result;
    },

    compact: function(array) {
      let result = [];
      for (const element of array) {
        if (element) {
          result.push(element);
        }
      }
      return result;
    },

    sortBy: function(array, iteratee) {
      let sorted = Object.assign([], array);
      sorted.sort(function(a,b){
        return iteratee(a)-iteratee(b);
      });
      for ( let i = 0; i < sorted.length; i++ ) {
        sorted[i] = iteratee(sorted[i]);
      }
      return sorted;
    },

    flatten: function (array, shallow = false) {
      if (shallow) {
        // array =[ 'a', [ 'b', 'c', [ 'd', ['e'] ], 'f' ], 'g' ]
        let toDelete = [];

        let stringy = JSON.stringify(array);
        let masterIndex = 0

        let openingBracketIndex = 0;
        let counter = 0 ;
        for (let i = 0; i < stringy.length; i++) {
          if (stringy[i] === "[") {
            openingBracketIndex = i;
            counter++;
          }
          if ( counter === 2 ) { break; }
        }

        let closingBracketIndex = 0;
        let endCounter = 0;
        let additionallyNested = 0;


        for (let j = openingBracketIndex; j < stringy.length; j++) {
          if (stringy[j] === "]" && endCounter === 0) {
            closingBracketIndex = j;
            endCounter++;
          }
          if (stringy[j] === "[") {
            additionallyNested++;
          }
          if (stringy[j] === "]" && endCounter !== 0) {
            additionallyNested--;
          }
          if ( endCounter === 2 && additionallyNested == 0) { break; }
        }


        // 1, 2, 3, [4, 5], 6, [7, [8, 9]]

        betterString = stringy.slice(0, openingBracketIndex) + stringy.slice(openingBracketIndex+1, closingBracketIndex) + stringy.slice(closingBracketIndex+1, masterIndex);
        return JSON.parse(betterString);

      } else {
        return array.toString().split(",").map(function(element) {return parseInt(element)});
      }
    },

    uniq: function(array, isSorted = null, iteratee = null) {
      if (iteratee === null) {
        iteratee = function(element){
          return element;
        }
      }
      let result = []
      let resultIteratee = []
      for (const element of array){
        if (!resultIteratee.includes(iteratee(element))){
          resultIteratee.push(iteratee(element))
          result.push(element)
        }
      }
      if (isSorted) {
        return result.sort(function(a, b) {
          return a-b;
        });
      } else {
        return result;
      }
    },

    keys: function(object) {
      let result = [];
      for(const element in object) {
        result.push(element);
      }
      return result;
    },

    values: function(object) {
      let result = [];
      for(const element in object) {
        result.push(object[element]);
      }
      return result;
    },

    functions: function(object) {
      let functions = this.keys(object);
      let result = [];
      for (const key of functions) {
        if (typeof object[key] === "function") {
          result.push(key);
        }
      }
      return result;
    },
  }
})()

fi.libraryMethod()
