const balancedBrackets = (string) => {
  // Checks for inputed strings with spaces
  const newString = string.split(" ").join("");
  // Early return checking if the given string has an even number of characters
  if (newString.length % 2 !== 0) return false;

  // Array to store checked value
  const arr = [];

  // Loop to tranverse through string
  for (let index = 0; index < newString.length; index++) {
    const char = newString[index];

    // Checks if the current char is opening a bracket
    if (char === "(" || char === "[" || char === "{") {
      arr.push(char);
      continue;
    }

    /**
      Check if the string length is zero, since there is no opening bracket 
      (covered in the previous conditional)
    */
    if (arr.length === 0) return false;

    // Using the switch case to check for the matching closing values
    const check = arr.pop();
    switch (char) {
      case ")":
        if (check !== "(") return false;
        break;

      case "}":
        if (check !== "{") return false;
        break;

      case "]":
        if (check !== "[") return false;
        break;
    }
  }

  return true;
};

console.log(balancedBrackets("{[()(){}[]]{}}"));
console.log(balancedBrackets("{[(()]}"));
console.log(balancedBrackets("{ } [ ] ( )"));
console.log(balancedBrackets("( ( ) { } [ [ ] )"));
console.log(balancedBrackets("[ { } ( [ ) ] ]"));
