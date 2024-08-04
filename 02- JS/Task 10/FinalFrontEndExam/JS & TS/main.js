// 2-
function isPalindrome(x) {
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false

// 3-
function removeSelectedItem() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.remove(dropdown.selectedIndex);
}

function removeAllItems() {
  var dropdown = document.getElementById("myDropdown");
  while (dropdown.options.length > 0) {
    dropdown.remove(0);
  }
}

// 4-
function calculateVolume() {
  var radius = document.getElementById("radius").value;

  if (radius === "" || isNaN(radius)) {
    alert("Please enter a valid number for the radius.");
    return;
  }

  radius = parseFloat(radius);

  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  document.getElementById("volume").value = volume.toFixed(2);
}

// 5-
function recursiveLength(str) {
  if (str === "") {
    return 0;
  } else {
    return 1 + recursiveLength(str.slice(1));
  }
}

console.log(recursiveLength("hello")); // 5
console.log(recursiveLength("recursive")); // 9

/**
 * In the first call, the string is "hello", and the function returns 1 + recursiveLength("ello").
 * In the next call, the string is "ello", and the function returns 1 + recursiveLength("llo").
 * In the next call, the string is "llo", and the function returns 1 + recursiveLength("lo").
 * In the next call, the string is "lo", and the function returns 1 + recursiveLength("o").
 * In the next call, the string is "o", and the function returns 1 + recursiveLength("").
 * In the next call, the string is "" , at which point the function returns 0.
 * The results from each recursive call are added together to give the final output, which is the length of the original string.
 */

// 6-
window.addEventListener("resize", adjustFooter);

function adjustFooter() {
  const wrapper = document.querySelector(".wrapper");
  const footer = document.querySelector(".sticky-footer");

  if (wrapper.offsetHeight + footer.offsetHeight < window.innerHeight) {
    footer.style.position = "absolute";
  } else {
    footer.style.position = "sticky";
  }
}

// Initial adjustment
adjustFooter();
// The adjustFooter function checks if the height of the page content plus the footer
// is less than the height of the viewport. If it is, the footer is positioned absolutely
// (position: absolute), otherwise, it stays sticky.

// 8- Angular X
// 9- in Q9.js
// 10- 
// 11- Jquery X
// 12- in Q12.html & Q12.css
