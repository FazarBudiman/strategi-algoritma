let number = [5, 10, 4, 5, 6, 7, 10 , 19, 13, 13, 31];
let temp = 0;

const average = () => {
    for (let index = 0; index < number.length; index++) {
        temp  += number[index];
    }
    return temp = temp/number.length;
}
const startAt = performance.now()
let averageOfNumber = average()
const endAt = performance.now()

console.log(`Average is : ${averageOfNumber}`);
console.log(`performance is : ${endAt - startAt}`)