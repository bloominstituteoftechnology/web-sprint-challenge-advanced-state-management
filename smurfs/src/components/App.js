import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import { connect } from 'react-redux';
import {updateSmurfs} from '../actions/actions';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      age:'',
      height: '',
    }
  }
  handleClick = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', {name: this.state.age, age: this.state.age, height: this.state.height}).then(res =>{
      console.log(res);
      this.getData();
    })
  }
  handleChange = (e) =>{
    e.preventDefault();
    this.setState({...this.state, [e.target.name]: [e.target.value]})
  }
  getData = () =>{
    axios.get('http://localhost:3333/smurfs').then(res =>{
      console.log(res);
      this.props.updateSmurfs(res.data);
    })
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Have fun!</div>
        {console.log(this.props.smurfs)}
        {this.props.smurfs.map((smurf) =>{
        return (
          <div key={smurf.id}>
            <hr></hr>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <hr></hr>
          </div>
        )}
        )}
      <hr></hr>
      <h2>Add Smurf</h2>
      <form onSubmit={this.handleClick}>
        <input type='text' name='name' onChange={this.handleChange} placeholder='Enter Name...' value={this.state.name}/>
        <input type='text' name='age' onChange={this.handleChange} placeholder='Enter Age...' value={this.state.age}/>
        <input type='text' name='height' onChange={this.handleChange} placeholder='Enter Height...' value={this.state.height}/>
        <button type='submit'>Add</button>
      </form>
      <hr></hr>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
}
export default connect(mapStateToProps, {updateSmurfs})(App);
