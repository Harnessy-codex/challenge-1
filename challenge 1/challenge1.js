let chaiMandaziCount = 0;
const limit = 30;

for (let i = 1; i <= limit; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Chai & Mandazi");
    chaiMandaziCount++;
  } else if (i % 3 === 0) {
    console.log("Chai");
  } else if (i % 5 === 0) {
    console.log("Mandazi");
  } else {
    console.log(i);
  }
}

console.log("FINAL TOTAL: " + chaiMandaziCount)