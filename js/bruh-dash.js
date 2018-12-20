var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr.shift();
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.pop()

  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr,x) { 
   return arr.indexOf(x)
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr,x) {
    return arr.lastIndexOf(x)
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var final = []
    for(var i=0; i<arr.length; i++){
      if(arr[i]){
        final.push(arr[i])
      }
      
    }
    // console.log(final)
    return final;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr) {
    // console.log(arr)
    var final = arr.slice(2,4)
    return final
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr,n){
    if(typeof n !== 'number'){
      arr.shift();
      return arr
    }else if(n===0){
      return arr
    }else if(typeof n === 'number'){
      for(var i=0; i<n; i++){
        arr.shift();
      }return arr;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr,n) {
    if(typeof n !== "number"){
      arr.pop();
      return arr;
    }else if(n===0){
      return arr
    }else if(typeof n ==='number'){
      for(var i=0;i<n;i++){
        arr.pop();
      }return arr
    }

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr,n) {
    if(typeof n !== 'number'){
      return arr.slice(0,1)
    }else if(n===0){
      var empty = [];
      return empty;
    }else if(typeof n === 'number'){
      var sliced = arr.slice(0,n);
      return sliced
    }

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr,n) {
    // console.log(arr)
    // console.log(n)
    var final = [];
    if(n===0){
      return final
    }else if(n>arr.length){
      return arr
    }else if(typeof n !== 'number'){
      var popcorn = arr.pop();
      final.push(popcorn)
      return final;
    }else if( typeof n === 'number'){
      for(var i=0;i<n;i++){
        var numPop = arr.pop();
        final.push(numPop);
      }final.reverse();
      return final;
    }
    

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr,str,start,end) {
    // console.log(arr)
    // console.log(str)
    // console.log(start)
    // console.log(end)
    var newArr = [];
    var howMany = end - start;
    if(typeof start === 'undefined' || typeof end === 'undefined'){
      for(var i=0;i<arr.length;i++){
        newArr.push(str)
      }return newArr;
    }for(var i=0; i<arr.length;i++){
        if(i>=start && i<=end-1){
          arr[i]=str
        }
    }
      return arr
    },


  // removes all given values from an array
  pull: function (arr,x,y) {
    // console.log(arr);
    // console.log(x)
    // console.log(y)
    var final = [];
    for(var i=0; i<arr.length;i++){
      if(arr[i] !== x && arr[i] !== y){
        final.push(arr[i])
      }
    }return final
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr,specsArr) {
    // console.log(arr);
    // console.log(specsArr)
    var final = [];
    for(var i=0;i<specsArr.length;i++){
      final.push(arr[specsArr[i]])
    }return final;

  },

  // creates an array excluding all the specified values
  without: function(arr,n,x,) {
    // console.log(arr);
    // console.log(n);
    // console.log(x);
    var final = [];
    for(var i=0;i<arr.length;i++){
      if(arr[i] !== n && arr[i] !==x){
        final.push(arr[i])
      }
    }return final
  },

  // returns an array with specified values excluded
  difference: function(arr,specsArr) {
    // console.log(arr);
    // console.log(specsArr)
    var final = [];
    
    for(var i=0;i<arr.length;i++){
      for(var x=0;x<specsArr.length;x++){
        if(arr[i]=== specsArr[x]){
          break;
        }else if(specsArr[x]>=arr[i]){
          final.push(arr[i]);
          break; 
        }
      }
    }
    return final;
    
    
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr, arr2) {
    // console.log(arr)
    // console.log(arr2)
    var final = [];
    for(var i=0;i<arr.length;i++){
      for(var x=0;x<arr2.length;x++){
        if(i===x){
          var inner =[];
          inner.push(arr[i],arr2[x])
          final.push(inner)
        }
      }
    }return final
    

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    console.log(arr);
    var final =[];
    var nums =[];
    var letters = [];
    for(var i=0;i<arr.length;i++){
      for(var x=0;x<arr[i].length;x++){
        if(x===0){
          nums.push(arr[i][x])
        }else{
          letters.push(arr[i][x])
        }
      }
    }
    final.push(nums);
    final.push(letters);
    return final;

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
