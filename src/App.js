import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: '', 
      name: '',
      title: '',
      city: '',
      location: '',
      description: '',
      edit: false
     }
    //  Explicitly bind after declaring & defining this.state, but inside the constructor
  }
  // Create methods between the constructor and render() in a class component
  render() { 
    // Deconstruct here; between render() and return
    return (
        <div className="profile-container">
          <div className="profile">
            <div className="imageContainer">
              <img src={this.state.img_url || 'https://picsum.photos/200/300'} alt={this.state.name} />
            </div>
            <h1>{this.state.name}</h1>
            <h2>{this.state.title}</h2>
            <h4>{this.state.city}, {this.state.location}</h4>
            <button>Message</button>
            <p>{this.state.description}</p>
            <button>Edit</button>
          </div>
          {/* Hide Form when this.state.edit is false; Show form if this.state.edit is true */}
          <form className="show-form">
            <label>Image URL:</label>
            <input value={this.state.img_url} />
            <label>Name:</label>
            <input value={this.state.name} />
            <label>Title:</label>
            <input value={this.state.title} />
            <label>City:</label>
            <input value={this.state.city} />
            <label>State:</label>
            <input value={this.state.location} />
            <label>Description:</label>
            <textarea value={this.state.description}></textarea>
          </form>
        </div>
      );
  }
}
 
export default App;