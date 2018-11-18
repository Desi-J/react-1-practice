import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: '', 
      name: 'John Doe',
      title: 'Full Stack Web Developer',
      city: 'Phoenix',
      location: 'AZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum sit amet ex id sollicitudin. Curabitur eu tortor nec tellus feugiat iaculis sed commodo neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Phasellus sit amet justo nunc. Duis non tincidunt leo, eget rhoncus nisi. Integer in justo sit amet est pulvinar vehicula.',
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
          <form>
            <label>Image URL:</label>
            <input />
            <label>Name:</label>
            <input />
            <label>Title:</label>
            <input />
            <label>City:</label>
            <input />
            <label>State:</label>
            <input />
            <label>Description:</label>
            <textarea></textarea>
          </form>
        </div>
      );
  }
}
 
export default App;