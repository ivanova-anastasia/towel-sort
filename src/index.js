// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    return matrix
        .map((value, index) => {
            if (!(index % 2 === 0)) return value.reverse();
            return value;
        })
        .flat();
};
