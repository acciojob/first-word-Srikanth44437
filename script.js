function firstWord(s) {
  if (s === '' || !s.includes(' ')) {
        return str;
    }
    return s.substring(0, s.indexOf(' '));
}

// Do not chang code below
const s = prompt("Enter String:");
alert(firstWord(s));
