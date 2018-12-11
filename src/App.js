import React from "react";
import "./index.css";
import store from './store';
class Square extends React.Component{
    render(){
        return(
            <button className="square" onClick={() => this.props.onClick()}>{this.props.value}</button>
        );
    }
}

class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    handleClick(i){

        let state = store.getState();
        console.log(state);
        alert(state.myReducer.name);

        const squareArr = this.state.squares.slice();

        if (squareArr[i]){
            console.log("这个格子已经有值了")
            return;
        }
        squareArr[i] = (this.state.xIsNext) ? "X" : "O";
        this.setState({
            squares: squareArr,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i){
        return(
            <Square onClick={() => this.handleClick(i)} value={this.state.squares[i]}/>
        );
    }

    render(){
        return(
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


class App extends React.Component{

    render(){
        return (
            <Board/>
        );
    }

}

export default App;