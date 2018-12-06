import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            header: "AAA",
            modalAccessor: "ACE",
            textarea: "请输入一点内容吧"
        }
    }

    changeHandler(){
        console.log("do sth change");
    }

    closeModal() {
        document.getElementById('documentSplitModal').style.display = 'none';
    }

    saveDocument(){
        alert("保存成功");
    }

    render() {
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }];

        const columns = [{
                Header: 'Name',
                accessor: 'name' // String-based value accessors!
            }, {
                Header: 'Age',
                accessor: 'age',
                Cell: props => <span className='wj-input'>{props.value}</span> // Custom cell components!
            }, {
                id: 'friendName', // Required because our accessor is not a string
                Header: 'Friend Name',
                accessor: d => d.friend.name // Custom value accessors!
            }, {
                Header: props => <span>Friend Age</span>, // Custom header components!
                accessor: 'friend.age'
            }];

        return(
            <div>
                <div id='documentSplitModal' className="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
                                <h4 className="modal-title">{this.state.header}</h4>
                            </div>
                            <div className="modal-body">
                                <div className='form-group'>
                <textarea id='dsTextarea' accessor={this.state.modalAccessor} className='form-control' rows={10} style={{width: '100%'}}
                          value={this.state.textarea} onChange={(e) => this.changeHandler(e.target)}>
                </textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" style={{float: 'left'}} data-dismiss="modal" onClick={this.saveDocument}>保存</button>
                                <button type="button" className="btn btn-default" style={{float: 'right'}} data-dismiss="modal" onClick={this.closeModal}>关闭</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactTable data={data} columns={columns} getTdProps={ (stat, rowInfo, column, instance) => {
                    return {
                        onClick: (e, original) => {
                            let cellType, accessor;
                            let target = e.target;
                            if (target.nodeName === 'SPAN') {
                                cellType = target.classList[0];
                                accessor = target.getAttribute('accessor');
                            }
                            if (cellType === 'wj-input') {
                                document.getElementById('documentSplitButton').click();
                            }
                        }
                    }
                }}/>
                <button id='documentSplitButton' type="button" className="btn btn-default hide" data-toggle='modal' data-target='#documentSplitModal' />
                {/*<button id='documentSplitButton' className='hide' data-toggle='modal' data-target='#documentSplitModal'>点我试试</button>*/}
        </div>);
    }
}
