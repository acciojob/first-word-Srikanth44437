function firstWord(s) {
  if (s === '' || !s.includes(' ')) {
        return str;
    }
    return s.substring(0, s.indexOf(' '));
}

// Do not change the code below
//const s = prompt("Enter String:");
alert(firstWord(s));
