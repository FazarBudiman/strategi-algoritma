let Num = [];
let number = 100000000;

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

// Assignment pada Arraya
for (let index = 0; index < number; index++) {
    Num[index] = index + 1
}

const startAt = performance.now()
let sequentialSearch = Sequential(Num, number)
const endAt = performance.now()

console.log(`Performance is : ${endAt - startAt}` )
console.log(sequentialSearch)