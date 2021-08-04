for (let i = 1; i <= 4; i++) {
  var str = "";
  for (let j = 4; j >i; j--) {
    str = str + " ";
  }
  for (let j = 1; j <= i; j++) {
    str = str + "* ";
  }
  console.log(str);
}
