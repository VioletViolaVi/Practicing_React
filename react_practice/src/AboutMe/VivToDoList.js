import React from "react";

function VivToDoList() {
  return (
    <div>
      <h2>Vivian's To Do list</h2>
      <form>
        <label>Learn React</label>
        <input type="checkbox"/>
        <br/>
        <label>Learn PHP</label>
        <input type="checkbox"/>
        <br/>
        <label>Learn TypeScript</label>
        <input type="checkbox"/>
      </form>
    </div>
  );
}

export default VivToDoList;
