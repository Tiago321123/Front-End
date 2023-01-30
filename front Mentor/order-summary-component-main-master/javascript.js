const S = "123  NN44 abab";

o = "";

for (i = 0; i < S.length; i++) {
  if (/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/.test(S.charAt(i))) {
    o += "-";
  } else if (/[abcedfghijklmnopqrstuvwxyz]/.test(S.charAt(i))) {
    o += "_";
  } else {
    o += "*";
  }
}

console.log(o);
