import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import data from '../../warframe_mods.json';
import Cell from '../../component/Cell/Cell';


const rowStyle = (row, rowIndex, some, somet) => {
    console.log("Something")
};

class BasicTable extends Component {
  
    state = {
        mods: [...data],
        columns: [{
            dataField: 'name',
            text: 'Name',
            sort: true
        },{
            dataField: 'description',
            text: 'Description',
            sort: true,
            formatter: (cell, row, rowIndex, formatExtraData) => {
                return (
                    <Cell contents = {cell}/>
                );
            }
        },{
            dataField: 'type',
            text: 'Type',
            sort: true
        },{
            dataField: 'polarity',
            text: 'Polarity',
            sort: true
        },{
            dataField: 'rarity',
            text: 'Rarity',
            sort: true
        }]
    }
    
    
    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <BootstrapTable 
                striped
                hover
                keyField='name' 
                data={ this.state.mods } 
                columns={ this.state.columns }/>
            </div>
        );
    }
}

export default BasicTable;