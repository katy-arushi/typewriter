const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, (90 * i))
}

setTimeout(() => {
  console.log("\n")
}, 3000)