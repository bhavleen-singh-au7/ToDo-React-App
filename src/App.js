import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ''
      });
    };
  };

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        <img src={logo} width="200" height="200" className='logo' alt='logo' />
        <h1 className='app-title'>My ToDo App</h1>
        <div className="container">
          <input
            type="text"
            className="input-text"
            placeholder="Add Item to ToDo"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className='add-btn'
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >Add
              </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id} className='list-item'>
                    <label className='label-text'>{item.value}</label>
                    <button
                      className='btn'
                      onClick={() => this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div >
    );
  }
}

export default App;