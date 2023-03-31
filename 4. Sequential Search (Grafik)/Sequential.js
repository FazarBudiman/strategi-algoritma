let Num = [];

// Algoritma Sequentian Search
const Sequential = (num, search) => {
    let find;
    for (let index = 0; index < num.length; index++) {
        if (num[index] == search) {
            find = true;
            index += num.length
        } else {
            find = false;
        }
    }

    if (find == true) {
        return `Angka Ditemukan`
    } else {
        return `Angka Tidak Ditemukan`
    }
}

let find = 1000000000

// Assignment pada Array
for (let index = 0; index < find; index++) {
    Num[index] = index + 1
}

const startAt = performance.now()
let sequentialSearch = Sequential(Num, find)
const endAt = performance.now()

console.log(`Performance is : ${endAt - startAt}` )
console.log(sequentialSearch)