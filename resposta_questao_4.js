function findMostWorkYears(matrix) {
  // Stores workYears data as object
  const workYears = {};

  /**
    Iterates between each item in the matrix and increments the count of people working in
    it for each year between x and y, if found.
    If the year already has a value inside of it, then it is added one. Otherwise, the count starts
    at 1.
  */
  matrix.forEach(([x, y]) => {
    for (let i = x; i <= y; i++) {
      // Pushes the work info that depicts the ammount of people working each year to workYearsObject
      workYears[i] = (workYears[i] || 0) + 1;
    }
  });

  // Finds the year with the most amount of people working and returns them
  let maxWorkerPerYearCount = 0;
  let result = [];

  for (let year in workYears) {
    /** 
      Checks if the value inside that specific key is bigger than the maxWorkerPerYearCount variable.
      If so, the result array is reset with the new value and the maxWorkerPerYearCount is updated.
    */
    if (workYears[year] > maxWorkerPerYearCount) {
      result = [year];
      maxWorkerPerYearCount = workYears[year];
    } 
    /**
      Checks if the ammount of people working is the same as maxWorkerPerYearCount variable. 
      If so, the specific year is added to the result variable.
     */
    else if (workYears[year] === maxWorkerPerYearCount) {
      result.push(year);
    }
  }

  return result;
}

console.log(
  findMostWorkYears([
    [1980, 1990],
    [1991, 2000],
    [1995, 2005],
    [2005, 2015],
    [2010, 2020],
    [2015, 2021],
  ])
);
