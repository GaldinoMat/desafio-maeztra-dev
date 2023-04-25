const builPermutationArr = (num) => {
  // Turns the num into an array
  const arr = [...Array(num).keys()];

  // Array to build up from permutation logic
  const result = [];

  // Function with temporary array to store values inside permute scope
  const recursivePermute = (arr, tempArr = []) => {
    // End case for permutation recursion function
    if (arr.length === 0) {
      result.push(tempArr);
    } else {
      // For loop iterating through arr object
      for (let index = 0; index < arr.length; index++) {
        // Introduces array shallow copy to use in next iterations
        const curr = arr.slice();
        // Changes current array copy indexes
        const next = curr.splice(index, 1);
        /**
          Runs recursive function again, this time using another shallow copy as first argument and 
          adding the next variable to the tempArray variable
        */
          recursivePermute(curr.slice(), tempArr.concat(next));
      }
    }
  };

  // First call of recursive permutation function 
  recursivePermute(arr);

  // Returns length that represents the amount of possibilities for each photo
  return result.length;
};

console.log(builPermutationArr(5));
