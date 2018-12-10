import React, { PureComponent } from "react";

export default class ModalDemo extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            header: "HHH",
            textarea: "文本域",
            modalAccessor: "这是咩"
        }
    }

    render(){
        return(
            <div id='myModal' className="modal fade hide" role="dialog" data-keyboard="false" data-backdrop="static">
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
        );
    };

}