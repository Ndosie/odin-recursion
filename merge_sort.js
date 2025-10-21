function twoWayMerge(A, B) {
    const m = A.length
    const n = B.length
    const C = new Array(m + n)
    let i = 0
    let j = 0 
    let k = 0

    while (i < m && j < n) {
        if (A[i] < B[j]) {
            C[k++] = A[i++]
        } else {
            C[k++] = B[j++]
        }
    }

    for (; i < m; i++) {
        C[k++] = A[i]
    }
    for (; j < n; j++) {
        C[k++] = B[j]
    }

    return C
}

function mergeSort(items) {
    if (items.length <= 1) return items

    const mid = Math.floor(items.length / 2)
    const left = mergeSort(items.slice(0, mid))
    const right = mergeSort(items.slice(mid))
    return twoWayMerge(left, right)
}