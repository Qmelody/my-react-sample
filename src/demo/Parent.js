import React, {Component} from 'react';

export default class Parent extends Component {
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
