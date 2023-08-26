var Board = require('./Board.js');
var Player = require('./Player.js');


class Game {
    #board
    #players
    #turn
    #isGameEnded
    constructor(player0Name, player1Name) {
        this.#board = new Board()
        this.#players = [
            new Player(player0Name, 'X'),
            new Player(player1Name, 'O')
        ];

        this.#turn = 0
        this.#isGameEnded = false
    }

    static newGame(player0Name, player1Name) {
        try {
            if (player0Name == player1Name || typeof player0Name != 'string' || typeof player1Name != 'string') {
                throw new Error("Invalid name")
            }
            return ['Object created', new Game(player0Name, player1Name)]
        } catch (error) {
            console.log(error.message)
        }
        
        
    }


    play(cellNumber) {
        try {
            //validation of cell Number
        if (cellNumber < 0 || cellNumber > 8 || typeof cellNumber != 'number') {
            throw new Error("Invalid Cell Number")
        }

        if (this.#isGameEnded) {
            return 'Game has Ended'
        }

        if (!this.#board.isCellEmpty(cellNumber)) {
            return 'Cell is not empty'
        }

        let currentPlayer = null

        if (this.#turn % 2 == 0) {
            currentPlayer = this.#players[0]
        }
        else {
            currentPlayer = this.#players[1]
        }
        
        this.#board.markCell(cellNumber, currentPlayer.getSymbol())
        this.#turn++
        
        this.#board.printBoard()
        
        if(this.#board.resultAnalyzer()){
            this.#isGameEnded = true;
            return `${currentPlayer.name} Wins!`
        }
        
        if (this.#board.isDraw()) {
            this.#isGameEnded = true;
            return "Game is Draw";
        }
        
        return "Continue.."
        } catch (error) {
            console.log(error.message)
        }
        
    
    }
}


module.exports = Game