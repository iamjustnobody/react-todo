import React from 'react';

export const Form = ({setinputtext,inputtext,ipChangeHandler,settodos1,todos1,todosLoader,setstatus,status1,statusHandler,
                     todoItemFilter1}) => {  //(props)=>{} //props.xxx


    const handleIpChange=(e)=>{
        setinputtext(e.target.value);
    //    console.log(inputtext); //ok
     //   props.setinputtext(e.target.value); console.log(props.inputtext); //ok
    }  //<input  onChange={ipChangeHandler}/> //or onChange={props.ipChangeHandler}//ok

    const loadTodos = (e) =>{
        e.preventDefault();
        settodos1([...todos1,{text:inputtext,completed:false,id:Math.random()*1000}]); //console.log(todos); //array
        setinputtext(""); //console.log(todos);
   //     todoItemFilter1(); //opt if useEffect in app.js //still yibu
    } //onClick={loadTodos} onClick={todosLoader} onClick={props.todosLoader}
//onClick={()=>{loadTodos();todoItemFilter1();}} //yibu
    const handleStatus = (e) => {
        setstatus(e.target.value);
    //    todoItemFilter1(); //opt if useEffect in app.js //still yibu
    } ////onChange={()=>{handleStatus();todoItemFilter1();}} //yibu

    return (
        <form>
            <input type="text" className="todo-input" onChange={ipChangeHandler} value={inputtext}/>
            <button className="todo-button" type="submit" onClick={todosLoader}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={handleStatus} name="todos" className="filter-todo">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}