import React from "react";

/**
 * 计算赢家的方法（有一方的棋子连成一条线就赢了）
 * long yin jk
 */
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            history: [
                {squares: Array(9).fill(null)}
            ],
            xIsNext: true,
            stepNum: 0
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNum + 1);
        const current = history[history.length - 1];
        const squareArr = current.squares.slice();
        //- 这个格子已经有棋子
        if (squareArr[i]){
            console.log("this square is not empty.");
            return;
        }
        //- 胜利者已经产生，比赛结束
        if (calculateWinner(squareArr)){
            console.log("the game is over.");
            return;
        }
        //- 如果可以继续，修改点击的格子的值，并存储最新状态
        squareArr[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([{
                squares: squareArr
            }]),
            xIsNext: !this.state.xIsNext,
            stepNum: history.length
        });
    }

    jumpTo(step){
        this.setState({
            stepNum: step,
            xIsNext: (step % 2) ? false : true
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNum];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) =>{
            const desc = move ? "Move #" + move : "Game start";
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner){
            status = "winner: " + winner;
        }else {
            status = "next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;