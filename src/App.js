import React, { Component } from 'react'
import Overview from "./components/Overview";
import uniqid from 'uniqid';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      task:{
        text:'',
        id:uniqid(),
        number:0},
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleChange(event){
    // console.log(event.target.value);
    this.setState({task:
      {
        text:event.target.value,
        id: this.state.task.id,
        number: this.state.tasks.length+1}})
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task:{
        text: '',
        id: uniqid(),
        number:this.state.tasks.length+1
      },
    })

    alert('Submitted: '+
    this.state.task.text+
    ', ID:'+this.state.task.id)
  }
  
  render(){
    const {task, tasks} = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="TaskName">Add task: </label>
          <input type='text' id='TaskName' onChange={this.handleChange}
          value={task.text}/>
          <button type="submit">+</button>
        </form>

        {/* calls Overview to render */}
        <Overview tasks ={tasks}/>
      </div>
    );
  }
}

export default App