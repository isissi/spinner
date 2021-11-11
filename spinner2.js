process.stdout.write('hello form spinner1.js... \rheyyy\n');

let count = 0;
let time = 100;
const symboles = '|/-\\';

while (count < 10) {
  for (let symbole of symboles) {
    setTimeout(() => {
      process.stdout.write(`\r${symbole}   `);
    }, time);
    time += 200;
    count += 1;
  }
}