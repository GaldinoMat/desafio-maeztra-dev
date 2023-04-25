const orderBy = (num) => {
  // Turns number into array
  const arr = Array.from(String(num));

  // This loop detects if any false value is detected, and uses early returns to deal with them
  for (let index = 0; index < arr.length; index++) {
    // Checks if there is next item on array
    if (arr[index + 1]) {
      // Values stored representing array values
      const numIndex = parseInt(arr[index]);
      const nextNumIndex = parseInt(arr[index + 1]);

      // Check if they are equal, if they are the next logic is ignored
      if (nextNumIndex === numIndex) continue;

      // Values indicating if array is in ascending or descending order
      const isAsc = nextNumIndex !== numIndex + 1 ? false : true;
      const isDesc = nextNumIndex !== numIndex - 1 ? false : true;

      // Early return in case both are false
      if (!isAsc && !isDesc) return false;

      // Check for array order
      if (isAsc) {
        if (nextNumIndex !== numIndex + 1) return false;
      } else if (isDesc) {
        if (nextNumIndex !== numIndex - 1) return false;
      }
    }
  }

  // If the loop finishes, that means there is no problem and the array is in proper order
  return true;
};

console.log("expected true, got: ", orderBy(12345678));
console.log("expected true, got: ", orderBy(1223455678));
console.log("expected true, got: ", orderBy(876543210));
console.log("expected false, got: ", orderBy(152456457));
console.log("expected false, got: ", orderBy(12356789));
console.log("expected false, got: ", orderBy(13579));
console.log("expected false, got: ", orderBy(9765421));
console.log("expected false, got: ", orderBy(123454321));
console.log("expected true, got: ", orderBy(12222222));
console.log("expected true, got: ", orderBy(2111111));
console.log("expected false, got: ", orderBy(1599));
