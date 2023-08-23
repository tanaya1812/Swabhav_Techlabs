
var Cell = require('./Cell.js');

class Board {
    constructor() {
        this.cells = [new Cell(), new Cell(), new Cell(),
        new Cell(), new Cell(), new Cell(),
        new Cell(), new Cell(), new Cell()]
    }

    isCellEmpty(cellNumber) {
        return this.cells[cellNumber].isCellEmpty()
    }

    markCell(cellNumber, symbol) {
        this.cells[cellNumber].markCell(symbol)
    }

    resultAnalyzer() {
        //analyze winner
        //rows
        if (this.cells[0].getMark() == this.cells[1].getMark() && this.cells[0].getMark() == this.cells[2].getMark() && !this.cells[0].isCellEmpty()) {
            return true
        }

        if (this.cells[3].getMark() == this.cells[4].getMark() && this.cells[3].getMark() == this.cells[5].getMark() && !this.cells[3].isCellEmpty()) {
            return true
        }
        if (this.cells[6].getMark() == this.cells[7].getMark() && this.cells[6].getMark() == this.cells[8].getMark() && !this.cells[6].isCellEmpty()) {
            return true
        }
        //columns
        if (this.cells[0].getMark() == this.cells[3].getMark() && this.cells[0].getMark() == this.cells[6].getMark() && !this.cells[0].isCellEmpty()) {
            return true
        }
        if (this.cells[1].getMark() == this.cells[4].getMark() && this.cells[1].getMark() == this.cells[7].getMark() && !this.cells[4].isCellEmpty()) {
            return true
        }
        if (this.cells[2].getMark() == this.cells[5].getMark() && this.cells[2].getMark() == this.cells[8].getMark() && !this.cells[2].isCellEmpty()) {
            return true
        }
        //diagonals
        if (this.cells[0].getMark() == this.cells[4].getMark() && this.cells[0].getMark() == this.cells[8].getMark() && !this.cells[0].isCellEmpty()) {
            return true
        }
        if (this.cells[2].getMark() == this.cells[4].getMark() && this.cells[2].getMark() == this.cells[6].getMark() && !this.cells[6].isCellEmpty()) {
            return true
        }
        return false
    }

    isDraw() {
        for (let index = 0; index < this.cells.length; index++) {
            if (this.cells[index].isCellEmpty())
                return false
        }
        return true
    }

    printBoard() {
        console.log(this);
    }
}


module.exports = Board