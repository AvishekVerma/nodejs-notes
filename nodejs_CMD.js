// console.log(process.argv);

const args = process.argv.slice(2);

let sum = 0;

args.forEach(num => {
    sum += Number(num);
});

console.log(`Sum of ${args.toString()} is ${sum}`);
