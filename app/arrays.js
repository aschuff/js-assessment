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

    return arr;
  },

  duplicates: function(arr) {

    return arr;
  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      Math.pow(arr[i], arr[i]);
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {

    return arr;
  }
};
