import React from 'react';
import {Todoitem} from './Todoitem';

export const Todo = ({todos2,settodos2,todoItemFilter2,filteredtodos2,
                     setfilteredtodos2}) =>{
//    console.log(todos2);
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filteredtodos2.map(todox => <Todoitem todoi={todox} key={todox.id} settodos2b={settodos2} todos2b={todos2} todoItemFilter2b={todoItemFilter2}
                                                   filteredtodos2b={filteredtodos2} setfilteredtodos2b={setfilteredtodos2}/>)}
        </ul>
        </div>
    );//filteredtodos2b={filteredtodos2} setfilteredtodos2b={setfilteredtodos2}
}
//{todos2.map(todox => {return <Todoitem todoi={todox} id={todox.id}/>;})}
//{todos2.map(todox => <Todoitem todoi={todox} idi={todox.id} settodos2b={settodos2} todos2b={todos2} todoItemFilter2b={todoItemFilter2}/>)} //ok