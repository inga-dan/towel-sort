
// You should implement your task here.

module.exports = function towelSort (matrix) {
     if(matrix == undefined) {
        return [];
    }
    let tSort = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 1) {
        matrix[i] = matrix[i].reverse();
        }
    }
    for(let i = 0; i < matrix.length; i++) {
        for (let p = 0; p < matrix[i].length; p++) {
            tSort.push(matrix[i][p]);
        }
    }
    return tSort;
};

