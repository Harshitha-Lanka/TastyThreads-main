import React, { Component } from 'react';
import './App.css'

export class form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Username:'',
      comments:'',
      topic:'react'
      

    }
  }
  
  handleusernamechange= Event =>{
      this.setState({
        Username: Event.target.value
      })
  }
  handlecoments= Event => {
    this.setState({
      coments:Event.target.value
    })
  }
  handletopichange = Event => {
    this.setState({
      topic:Event.target.value
    })
  }
      render() {
    return (
      <form>
        <h1>Recipe Form</h1>
        <div>
        <label>Username : </label>
        <input type="text" value={this.state.Username} 
        onChange={this.handleusernamechange} />
      </div>
      <div>
        <label>Comments : </label>
        <textarea value={this.state.comments}
        onChange={this.handlecoments.coments} ></textarea>
      </div>
      <div>
        <label>Topic : </label>
        <select value={this.state.topic} onChange={this.handletopichange}>
        <option value="Select Items">Select Items</option>
          <option value="Tiffins">Tiffins</option>
          <option value="Non-Veg">Non-veg</option>
          <option value="Veg">veg</option>

        </select>
      </div>
      </form>
    );
  }
}

export default form;
