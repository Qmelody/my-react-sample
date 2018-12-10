import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../index.css";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const data = [{
            name: '小熊浮力皮flippy',
            age: 28,
            friend: {
                name: '啥？小熊的表弟',
                age: 25,
            }
        }];

        // const columns = [{
        //     Header: '姓名',
        //     accessor: 'name' // String-based value accessors!
        // }, {
        //     Header: '年龄',
        //     accessor: 'age',
        //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        //     // Cell: props => <input className='number' onChange={(e) => this.inputChange(e)} value={this.state.value}/> // Custom cell components!
        // }, {
        //     id: 'friendName', // Required because our accessor is not a string
        //     Header: 'Friend Name',
        //     accessor: d => d.friend.name // Custom value accessors!
        // }, {
        //     Header: props => <span>Friend Age</span>, // Custom header components!
        //     accessor: 'friend.age'
        // }];

        const columns = [
            {
                Header: '问题名称',
                accessor: "name"
            },{
                Header: '柜面哈哈',
                accessor: "age"
            },{
                Header: '没啥说的',
                accessor: "friend.name"
            }
        ];

        return(
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    showPaginationBottom={false}
                    pageSize={5}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                console.log("A Td Element was clicked!");
                                let target = e.target;
                                if (target.nodeName === "SPAN"){
                                    let classList = target.classList;
                                    if (classList.contains("number")){
                                        //- 显示弹框
                                        document.getElementById("myButton").click();
                                    }
                                }
                            },
                            onChange: (e, original) => {
                                console.log("A Td Element onChange: " + e.target.name +" --- "+ e.target.value);
                            }
                        };
                    }}
                />
            </div>
        );
    }

}
