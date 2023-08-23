var Board = require('./Board.js');
var Player = require('./Player.js');


class Game {

    constructor(player0Name, player1Name) {
        this.board = new Board()
        this.players = [
            new Player(player0Name, 'X'),
            new Player(player1Name, 'O')
        ];

        this.turn = 0
        this.isGameEnded = false
    }

    static newGame(player0Name, player1Name) {
        if (player0Name == player1Name || typeof player0Name != 'string' || typeof player1Name != 'string') {
            return ['Invalid name', null]
        }
        return ['Object created', new Game(player0Name, player1Name)]
    }


    play(cellNumber) {
        //validation of cell Number
        if (cellNumber < 0 || cellNumber > 8 || typeof cellNumber != 'number') {
            
            return 'Invalid Cell Number'
        }


        if (this.isGameEnded) {
            return 'Game has Ended'
        }

        if (!this.board.isCellEmpty(cellNumber)) {
            return 'Cell not empty'
        }

        let currentPlayer = null

        if (this.turn % 2 == 0) {
            currentPlayer = this.players[0]
        }
        else {
            currentPlayer = this.players[1]
        }
        
        this.board.markCell(cellNumber, currentPlayer.getSymbol())
        this.turn++
        
        this.board.printBoard()
        
        if(this.board.resultAnalyzer()){
            this.isGameEnded = true;
            return `${currentPlayer.name} Wins!`
        }
        
        if (this.board.isDraw()) {
            this.isGameEnded = true;
            return "Game is Draw";
        }
        
        return "Continue.."
    
    }
}


module.exports = Game