process.stdout.write('hello form spinner1.js... \rheyyy\n');

let count = 0;
let time = 100;

while (count < 10) {
  const symboles = "|/-\";
  for (let symbole of symboles) {
    setTimeout(() => {
      process.stdout.write(`\r${symbole}   `);
    }, 100);
    time += 200;
    count += 1;
  }
}