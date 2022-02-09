
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) { return []; }
  let resultArr = []; 
  let v = 0;
  for (let element of matrix) {
     v%2 === 0 ? element.sort((a, b) => a - b) : element.sort((a, b) => b - a);
     v++;
  }
  for (let el2 of matrix)
  resultArr = [...resultArr, ...el2]
  return resultArr;
  

}