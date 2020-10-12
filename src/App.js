import React from 'react';
import './App.css';
import ContactList from './ContactList.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        // name: '',
        // phone_number:'',
        // address:'',
        text: '',
        key: '',
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  };

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          key: '',
          text: ''
        }
      })
    }


  }
  render() {
    return (
      <div className="className">
        <header>
          <form id="phoneBookApp" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
              value={this.currentItem}
              onChange={this.handleInput}
            />
            <button type='submit' placeholder>Add</button>
          </form>
        </header>
        <ContactList></ContactList>
      </div>
    );

  }
}

export default App;
