
module.exports = function towelSort (matrix) {
    
    let answer = [];

    if (!matrix) return []
    
    matrix.forEach( (arr, i) => {
      if (i % 2 === 0) answer.push(...arr);
      else answer.push(...(arr.reverse()));
    })
  
    return answer
  }
