import React from "react";
////1////////////
// function Todo() {

//   return <div data-testid="test-3">Hello world!!</div>;
// }

/////2///////////
function Todo( {todo} ) {

  const { id, title, completed } = todo;
  const H1 = <h1>todo -----{title}</h1>;
  const text = completed ? <strike>{H1}</strike> : H1;
  return (
    <>
      {/* <div data-testid={`todo-${id}`}>{text}</div> */}
      <div data-testid={`todo-${id}`}>--{text}--</div> {/* press u to update snapshot*/}
    </>
  );
}

  export default Todo;
