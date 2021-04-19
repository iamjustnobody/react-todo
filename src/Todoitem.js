import React from 'react';

export const Todoitem = ({todoi,settodos2b,todos2b, todoItemFilter2b,
                         filteredtodos2b,setfilteredtodos2b}) =>{ //could {key} here then use {idi} below; or just use {todoi.id} below
//console.log(todii);
    console.log(filteredtodos2b);
    const completeItem = (e) =>{ console.log(filteredtodos2b);
     //   setfilteredtodos2b(filteredtodos2b.map( //changing filteredtodos(2b) not changing todos(2b)
        settodos2b(todos2b.map( //changing todos(2b) not changing filteredtodos(2b)
            item => {
                if(item.id===todoi.id){
                    return {...item, completed:!item.completed,}; //an object in an array
                }
                return item;
            }
        ));
    //    todoItemFilter2b(); //opt if useEffect in app.js //reset by useeffect
    }
    const trashItem = (e) =>{
        settodos2b(todos2b.filter(item => item.id!==todoi.id));//changing todos(2b) not changing filteredtodos(2b)
    //   todoItemFilter2b(); //opt if useEffect in app.js
    //    setfilteredtodos2b(filteredtodos2b.filter(item => item.id!==todoi.id));//changing filteredtodos(2b) not changing todos(2b)
    }
    return ( //todoi belongs to filteredtodos2b as todoi is part of filteredtodos2 in todojs
        <div className="todo">
            <li className={`todo-item ${todoi.completed?"completed":""}`}>{todoi.text}</li>
            <button className="complete-btn" onClick={completeItem}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={trashItem}>
                <i className="fa-trash"></i>
            </button>
        </div>
    );
}
