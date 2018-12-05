import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Table extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <span>哈哈哈</span>
                <ReactTable data={"111"}>
                    111
                </ReactTable>
            </div>
        );
    };
}