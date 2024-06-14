import React, {Component} from 'react';

/**
 * 父组件调用子组件方法
 */
class Parent extends Component {
    render() {
        return(
            <div>
                <h3>Parent start</h3>
                <Child onRef={this.onRef} />
                <br/>
                <button onClick={this.click} > Parent Button </button>
                <h3>Parent end</h3>
            </div>
        )
    }

    onRef = (ref) => {
        // 保存子组件的引用，方便调用子组件方法
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

    myName = () => alert('Parent call Child method alert!')

    click = (e) => {
        alert('Child Button')
    }

    render() {
        return (
            <div>
                <h4>Child start</h4>
                <button onClick={this.click} > Child Button </button>
                <h4>Child end</h4>
            </div>
        );
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Parent />
            </div>
        );
    }
}
