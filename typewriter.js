const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    i === sentence.length - 1 ? process.stdout.write(sentence[i] + '\n') : process.stdout.write(sentence[i]);
  }, i * 50);
}