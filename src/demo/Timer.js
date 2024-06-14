import React from "react";
import pic from './1.jpeg'

/**
 * 方法执行顺序：constructor > componentWillMount > render > componentDidMount >
 */
class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentTime: new Date(),
            seconds: 0,
            flag: true,
            opacity: 1.0,
            msg: '红颜易老,刹那芳华,与其天涯思恋,莫若相忘于江湖.'
        }
    }

    count() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    tick(){
        this.setState({
            currentTime: new Date()
        });
    }

    //- 计时器
    timeKeeping(){
        if(this.state.flag){
            this.timer = setInterval(() => this.count(), 1000);
        }else {
            clearInterval(this.timer);
        }
        this.setState({
            flag: !this.state.flag
        });
    }

    //- 透明度渐变
    changeOpacity(){
        let opacity = this.state.opacity;
        if (opacity <= 0.1){
            this.setState({
                opacity: 1.0
            });
        }else {
            this.setState({
                opacity: opacity - 0.1
            });
        }
    }

    componentWillMount() {
        //- 清除定时任务
        clearInterval(this.interval);
        clearInterval(this.timer);
        clearInterval(this.opacityChange);
    }

    /* render()后执行 */
    componentDidMount() {
        /**
         * setInterval()的第一个参数的两种写法：
         *      1.() => this.someMethod()
         *      2.function(){}.bind(this)
         * 总之都要绑定指向this
         * @type {number}
         */
        this.interval = setInterval(() => this.tick(), 1000);
        this.opacityChange = setInterval(() => this.changeOpacity(), 200);
        // this.interval = setInterval(function () {
        //     this.setState({
        //         seconds: this.state.seconds + 1
        //     });
        // }.bind(this), 1000);
    }

    render(){
        return(
            <div>
                <button onClick={() => this.timeKeeping()} className="btn btn-primary">{this.state.flag ? '开始计时' : '停止计时'}</button>
                &nbsp; :<span className="timer timer-count">{this.state.seconds}s</span>
                <hr/>
                <span className="timer">Clock</span>
                &nbsp;: <span className="timer">{this.state.currentTime.toLocaleTimeString()}</span>
                <hr/>
                <div style={{opacity:this.state.opacity}}>{this.state.msg}</div>
                <marquee behavior="alternate" width="100px">我来回滚动</marquee>
                <marquee direction="right"  behavior="alternate"  scrollamount="5"  scrolldelay="10"  loop="2" height="75px" width="750px" bgcolor="#ADFEDC	" >
                    <font  face="隶书" size="5">行尽天涯静默山水间，倾听晚风拂柳笛声残</font>
                </marquee>
                <hr/>
                <img className="img" src={pic} alt="kuma"/>
            </div>
        );
    };

}

export default Timer;