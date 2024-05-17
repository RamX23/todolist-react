import React, { useState } from 'react'

export default function Taskbox() {
  const [task,settask]=useState("");
  const [desc,setdesc]=useState ("");
  const [tasklist,addtask]=useState([]);

  const handleclick=(e)=>{
    e.preventDefault();
    addtask([...tasklist,{task,desc}]);     
    console.log(tasklist);
    settask("");
    setdesc("");
  };
  let todos=<h5>NO TASK AVAILABLE</h5>
  //  todos=tasklist.map((t,i)=>{
  // return 
  // (
  //   <li>
  // <div>
  //   <h3> {t.task}</h3>
  //   <p>{t.desc}</p>
  // </div>
  // </li>
  // );
  // });
  return (
    <div>
            <div className="input-group mb-3 outline-dark" style={{width:'40vw',position:'relative',top:'20vh',left:'28vw'}}>
              <form  onSubmit={handleclick} style={{display:'flex'}}>

          <div style={{width:'40vw', display:'flex', justifyContent:'space-between'}}>
             <div className="col-sm-2">
               <label className="visually-hidden">Task</label>
               <input className="form-control" id="inputPassword2" placeholder="Task" onChange={(e)=>{settask(e.target.value);}} value={task}/>
             </div>
             <div className="col-sm-8">
               <label className="visually-hidden">Description</label>
               <input className="form-control" id="inputPassword2" placeholder="Description"  onChange={(e)=>{setdesc(e.target.value);}} value={desc}/>
             </div>
             <div className="col-auto">
               <button type="submit" className="btn btn-dark mb-3">add task</button>
             </div>
             </div>

  </form>
  <div className="list-group" style={{width:'40vw', position:'relative', top:'2vh',background:'purple'}}>
    <ul>{todos}</ul>
</div>
</div>

    </div>
  )
}
