import React from 'react';

const Overview = (props) =>{
    const {tasks} = props;

    return(
        <ul>
           {tasks.map((task)=>{return<li>{task.text}</li>})}
            <li>demo element</li>
        </ul>
    )
}


export default Overview;