/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var length = preferences.length,
      count = 0,
      k;

      for( var i = 0; i < length; i++){
        k = preferences[i] - 1;

        var k2 = preferences[k] - 1;
        if(k == k2) continue

        var k3 = preferences[k2] - 1;
        if(k2 == k3) continue

        if(k3 == k){
          count++;
        }
        return count / 3
      }

};
