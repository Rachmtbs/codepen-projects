function checkPalindrome() {
  // Get the input value and trim whitespace
  const str = document.getElementById("inputString").value.trim();

  // Check if the input value is empty or contains only whitespace
  if (str === "") {
    alert("Please enter a string");
    return false;
  }

  // Reverse the string
  const reverseStr = str.split("").reverse().join("");

  // Check if the original string is equal to the reversed string
  if (str === reverseStr) {
    alert("Palindrome");
    return true;
  } else {
    alert("Not a palindrome");
    return false;
  }
}