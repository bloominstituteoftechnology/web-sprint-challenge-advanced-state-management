import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/getSmurfs'
import {postSmurfs} from '../actions/postSmurfs'
class Smurfs extends React.Component{
constructor(){
    super();
    this.state={name:'', age:'', height:''}
}

componentDidMount(){this.props.getSmurfs()}
        



handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
handleSubmit=(e)=>{
        e.preventDefault();
        this.props.postSmurfs(this.state);
        this.setState({
            name:'',
            age:'',
            height:''})
    }
    render(){
    console.log(this.props)
    return(
        <div>
            <h1>Smurfs</h1>
            <form onSubmit={this.handleSubmit}>
            <input type='text' name='name' placeholder='name' onChange={this.handleChange} value={this.state.name}/>
            <input type='text' name='age' placeholder='age' onChange={this.handleChange} value={this.state.age}/>
            <input type='text' name='height' placeholder='height' onChange={this.handleChange} value={this.state.height}/>
            <button >Add Smurf</button>
            </form>
            {this.props.smurfs.map(smurf=>
            <div key={smurf.id}>
            <h4>{smurf.name}</h4>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            </div>
            )}
        </div>

    )}
}
const mapStateToProps=(state)=>{
    return{ smurfs:state.smurfs,
        fetching:state.fetching,
        fetchError:state.error,
        smurf:state.smurf,
        posting:state.posting,
        postError:state.postError}   
}

const mapDispatchToProps={
    getSmurfs,
    postSmurfs
  }
export default connect(mapStateToProps,mapDispatchToProps)(Smurfs)