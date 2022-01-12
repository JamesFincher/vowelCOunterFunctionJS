function vowelCounter(str) {
    let chars = str.split("");
    let numV = 0;
    for (i = 0; i < chars.length; i++) {
      string = chars[i];
      if (string.includes("a")) {
        numV++;
      } else if (string.includes("A")) {
        numV++;
      } else if (string.includes("e")) {
        numV++;
      } else if (string.includes("E")) {
        numV++;
      } else if (string.includes("i")) {
        numV++;
      } else if (string.includes("I")) {
        numV++;
      } else if (string.includes("o")) {
        numV++;
      } else if (string.includes("O")) {
        numV++;
      } else if (string.includes("u")) {
        numV++;
      } else if (string.includes("U")) {
        numV++;
      }
    }
    console.log(numV);
  }
  
  
  vowelCounter('This is pretty darn cool if I say so myself')
