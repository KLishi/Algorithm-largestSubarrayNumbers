function largestSubarrayNumbers(arr) {
  let largestNumberArray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      let largestNumber = arr[i][0];
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }

      largestNumberArray[i] = largestNumber;
    }
  }
  console.log(largestNumberArray);

  return largestNumberArray;
}
largestSubarrayNumbers([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
// time complexity: o(m*n)[m=length of array, n=length of sub array]
// space complexity: o(1)
