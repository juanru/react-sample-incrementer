import React, { Component } from 'react';

class App extends Component {
    state = {counter: 0};

    incrementHandler = (incrementValue) => {
        this.setState( (prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    };

    resetHandler = () => {
        this.setState({
            counter: 0
        })
    };

    render () {
        return (
            <div>
                <Button value={1} onClickFunction={this.incrementHandler}/>
                <Button value={5} onClickFunction={this.incrementHandler}/>
                <Button value={15} onClickFunction={this.incrementHandler}/>
                <Button value={100} onClickFunction={this.incrementHandler}/>			                 				  <Button value={"Reset"} onClickFunction={this.resetHandler}/>
                <Result value={this.state.counter}/>
            </div>
        );
    };
}

class Button extends Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.value);
    };
    render () {
        return (
            <button onClick={this.handleClick}>
                {isNumeric(this.props.value)
                    ? "+" : null
                }
                {this.props.value}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>The total result is: <strong>{props.value}</strong></div>
    );
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export default App;
