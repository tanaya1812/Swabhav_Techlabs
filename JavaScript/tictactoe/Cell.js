class Cell {
    constructor() {
        this.mark = 'E'
    }

    markCell(symbol) {
        this.mark = symbol
    }
    isCellEmpty() {
        return this.mark == 'E'
    }
    getMark() {
        return this.mark
    }
}

module.exports = Cell