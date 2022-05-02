console.log(global);

// let i = 0;
// setInterval( () => {
//     console.log(i++);
// }, 1000)

// console.log(1823 / 60);

if(typeof window === "object") {
    console.log("In Browser");
} else {
    console.log("In Node")
}
let obj = typeof window;
console.log(obj)