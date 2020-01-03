import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataColumns: ['Item', 'Material Fee', 'Packing Fee', 'Unpacking Fee'],
      dataRows: [{
        name: 'Item',
        inputType : 'select'
    },
    {
        name:  'Material Fee',
        inputType : 'currency'
    },
    {
        name : 'Packing Fee',
        inputType : 'currency'
    },
    {
      name : 'Unpacking Fee',
      inputType : 'currency'
    }
    ]
      
    } 
  } 

      addNewRow = () => {
      const Item = {
        name: "",
        inputType: ""
        
      };
      this.setState({
        dataRows: [...this.state.dataRows, Item]
      });
    };
    
    handleRemoveRow = () => {
      this.setState({
        dataRows: this.state.dataRows.slice(0, -1)
      });
    };

  render() {
    return(
      <div className="App">
        <header className="App-header">
        <table className="table">
        <tbody>
        <tr>
        <td>Items <br/><select value={this.props.Item}>
        <option value="Dishpack">Dishpack</option>
        <option value="Carton">Carton</option>
        <option value="CuCarton">Cu Carton</option>
        </select></td>
        <td>$ Material Fee<br/><input type="currency" name="currency"/></td>
        <td>$ Packing Fee<br/><input type="text" name="currencyp"/></td>
        <td>$ Unpacking Fee<br/><input type="text" name="currencyup"/></td><br></br>
        <button><i className="fa fa-trash-o" aria-hidden="true"></i>Delete</button>
       
        </tr></tbody></table><br/><br/>
        <button id="addbtn" className="btn" onClick={this.addNewRow}>Add</button>
        </header>
      </div>
      
     )
      
  }
  }

render(<App />, document.getElementById('root'));
