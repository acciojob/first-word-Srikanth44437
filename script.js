function firstWord(s) {
  if (str === '' || !str.includes(' ')) {
        return str;
    }
    return str.substring(0, str.indexOf(' '));
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
