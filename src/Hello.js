import React from "react";

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            flag: true
        }
    }

    count(){
        this.setState({
            time: new Date(),
            flag: !this.state.flag
        });
    }

    /* render后执行 */
    componentDidMount() {
        //- 设置定时任务
        // setInterval(() => this.count(), 1000);

    }

    render() {
        return (
            <div>
                <div>当前时间：{this.state.time.toLocaleTimeString()}</div>
                <span>flag: {this.state.flag ? 'hello world' : 'good bye.'}</span><br/>
                <button onClick={() => this.count()}>button</button>
            </div>
        );
    };

}

export default Hello;