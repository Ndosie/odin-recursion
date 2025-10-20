function fibs(n) {
    const fibNums = []

    for (let i = 0; i < n; i++) {
        const len = fibNums.length
        if (i === 0 || i === 1) {
            fibNums.push(i)
        } else if (i === 2) {
            fibNums.push(1)
        } else {
            fibNums.push(fibNums[len - 1] + fibNums[len - 2])
        }
    }

    return fibNums
}

function fibsRec(n) {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]

    const fibs = new Array(n)
    fibs[0] = 0
    fibs[1] = 1

    function createFibs(i) {
        if (fibs[i] !== undefined) return fibs[i]
        fibs[i] = createFibs(i - 1) + createFibs(i - 2)
        return fibs[i]
    }
    createFibs(n - 1)
    return fibs
}

console.log("Printing fibonacci numbers using loops");
console.log(fibs(8))

console.log("Printing fibonacci numbers recursively");
console.log(fibsRec(8))