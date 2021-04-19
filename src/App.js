import logo from './logo.svg';
//import './App;
import {Form} from "./Form";
import {Todo} from "./Todo";
import "./App.css"; //or import in index css
import React, {useEffect, useState} from 'react';

function App() {
    const [inputText,setInputText]=useState("");
    const [todos,setTodos]=useState([]); //[{text:"hah",completed:true,id:500,}]
    const [status,setStatus]=useState("All");
    const [filteredTodos,setFilteredTodos]=useState(todos);

    const todoItemFilter = () => {
        if(status==="Completed"){
            setFilteredTodos(todos.filter(item=>{return item.completed===true;}));
        } //item=>item.completed===true
        else if(status==="Uncompleted"){
            setFilteredTodos(todos.filter(item=>{return item.completed===false;}));
        } //item=>item.completed!==false
        else
            setFilteredTodos(todos);
    }

    const ipChangeHandler = (e) => {
        setInputText(e.target.value);
   //     console.log(inputText);
    }
    const todosLoader = (e) =>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}]); //console.log(todos);
        setInputText(""); //console.log(todos);
     //   todoItemFilter(); //yibu //todosLoader={(e)=>{todosLoader(e);todoItemFilter();} //yibu
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    //    todoItemFilter(); //opt if useEffect //yibu //statusHandler={(e)=>{statusHandler(e);todoItemFilter();}} //yibu
    }
 //   useEffect(todoItemFilter,[]);
    useEffect(todoItemFilter,[status,todos]);
  //  useEffect(todoItemFilter,[status]); //no todos not showing todolists UI//if "All" and add new item - not showing in UI
    // useEffect(todoItemFilter,[status,filteredTodos]);
    //filteredTodos 1)change todos/todos2b completed state (see todoitem.js) 2) add new items not showing in UI// so change filteredTodos to todos in useeffect
    //if changing todos2b or settodos2b to (set)filteredtodos2b in todoitem.js (completed/trashItem), and keeping filteredTodos in useeffect
    // - changing completed state will line through //(completed/trashItem)
    //line through - className=todoi.completed?"completed":"" in todoitem.js but filteredtodos2b/filteredTodos will be reset to todos/todos2b due to effect

  return ( //inputtext={inputText} state change render UI/component   //form.js logic todojs UI
    <div className="App">
        <header> My to-do list!</header>
      <Form setinputtext={setInputText} inputtext={inputText} ipChangeHandler={ipChangeHandler}
      settodos1={setTodos} todos1={todos} todosLoader={todosLoader}
      setstatus={setStatus} status1={status} statusHandler={statusHandler}
      todoItemFilter1={todoItemFilter} />
      <Todo todos2={todos} settodos2={setTodos} todoItemFilter2={todoItemFilter}
            filteredtodos2={filteredTodos}
            setfilteredtodos2={setFilteredTodos}/>
    </div>
  );// setfilteredtodos2={setFilteredTodos} passed onto todojs
}

export default App;
