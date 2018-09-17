/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0,
      n;

      for(var i = 0; i < preferences.length; i++){
        n = i;
        for(var j = 0; j < 3; j++){
          if(n >= preferences.length) break;
          if(n + 1 === preferences[n]) break;
          n = preferences[n] -1;
        }
        if( (j === 3 ) && (i === n)){
          count++
        }
      }
      return count / 3;
};
