import React from 'react';
import './App.css';
import ContactList from './ContactList.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
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
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
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
  };
  
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  };

  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
  };

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
        <ContactList
          items={this.state.items}
          deleteItem = {this.deleteItem}
          setUpdate = {this.setUpdate}
        ></ContactList>
      </div>
    );

  }
}

export default App;
