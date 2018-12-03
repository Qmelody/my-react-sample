import React, {Component} from 'react';

class Parent extends Component {
    render() {
        return(
            <div>
                <Child onRef={this.onRef} />
                <button onClick={this.click} >click</button>
            </div>
        )
    }

    onRef = (ref) => {
        this.child = ref;
    }

    click = (e) => {
        this.child.myName();
        console.log("xx");
    }

}

class Child extends Component {
    componentDidMount(){
        this.props.onRef(this)
    }

    myName = () => alert('flippy')

    render() {
        return ('BUTTON');
    }
}

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
