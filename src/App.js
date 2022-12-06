import React, { Component } from 'react'
import Overview from "./components/Overview";


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      task:{text:''},
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleChange(event){
    // console.log(event.target.value);
    this.setState({task:{text:event.target.value}})
  }

  handleSubmit(event){
    alert('Submitted: '+
    this.state.task.text);
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task:{text:''},
    })
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