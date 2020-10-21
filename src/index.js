// You should implement your task here.

module.exports = function towelSort(matrix) {
    matrix = matrix || []
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            let b = matrix[i];
            matrix[i] = [];
            for (let j = 0; j < b.length; j++) {
                matrix[i].unshift(b[j]);
            }
        }
    }
    return matrix.flatMap(e => e);
}
