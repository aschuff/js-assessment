exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i--,1)
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i--,1)
      }
    }
    return arr;
  },

  append: function(arr, item) {
      arr.push(item)
      return arr;
  },

  truncate: function(arr) {
        arr.pop()
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr;
  },

  curtail: function(arr) {
    arr.shift()
      return arr;
  },

  concat: function(arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    return arr3;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++
      }
    }
    return count;
  },

  duplicates: function(arr) {
    let exist = [];
    let doubles = [];
    for (var i = 0; i < arr.length; i++) {
      if (exist.indexOf(arr[i]) === -1) {
        exist.push(arr[i]);
      }else if (doubles.indexOf(arr[i]) === -1) {
        doubles.push(arr[i]);
      }
    }
    return doubles;
  },

  square: function(arr) {
    let newArr = []
    for (var i = 0; i < arr.length; i++) {
      newArr.push(Math.pow(arr[i], 2));
    }
    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        newArr.push(i)
      }
    }
    return newArr;
  }
};
