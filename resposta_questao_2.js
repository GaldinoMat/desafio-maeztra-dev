const checkDuplicates = (arr) => {
  /**
    This function filters out any element whose index matches the elementIndex argument, which means that if they match, 
    they are an unique value
  */
  const duplicates = arr.filter(
    (item, elementIndex) => arr.indexOf(item) !== elementIndex
  );

  /**
    Returns a Set, a data structure in javascript that contains unique values, avoiding multiple values in the "duplicates" 
    variables and only focusing in the values that are duplicated. We use the [] notation to turn it into an array and the 
    spread operator to get the values from the object it returns
  */
  return [...new Set(duplicates)];
};

console.log(checkDuplicates([4, 5, 44, 98, 4, 5, 6, 7]));
