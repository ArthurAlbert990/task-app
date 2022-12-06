import React from 'react';


const Overview = (props) =>{
    const {tasks} = props;

    function deleteTask(task) {
        //delete by number or id
        console.log(task);
        console.log(tasks);
        // como realizar setState?
        //this.setState(tasks);
    }

    return(
        <ul>
           {tasks.map((task)=>{return<li key={task.id}>{task.number}. {task.text} - {<button onClick={function(){deleteTask(task)}}> X </button>}</li>})}
            <li>demo element</li>
        </ul>
    )
}


export default Overview;