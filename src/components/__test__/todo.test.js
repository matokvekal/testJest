import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../../components/Todo";
import renderer from "react-test-renderer";

////1/////
// test("test1", () => {
//   expect(1 + 1).toBe(2);
// });
// test("test1", () => {
//   expect(3 + 1).toBe(4);
// });

// test("test2", () => {
//   expect(true).toBe(true);
// });


/////2//////
// test("should render todo component", () => {
//    render(<Todo />);
//    const todoElement = screen.getByTestId("test-3");
//    expect(todoElement).toBeInTheDocument();
//    expect(todoElement).toHaveTextContent("Hello world!");
//  });

////3/////

afterEach(()=>{
   cleanup();
})

// test("should render non-component todo", () => {
//    const todo = {id:1, title:"bring milk", completed:false,};
//    render(<Todo todo={todo}/>);
//    const todoElement = screen.getByTestId("todo-1");
//    expect(todoElement).toBeInTheDocument();
//    expect(todoElement).toHaveTextContent("bring milk");
//    expect(todoElement).not.toContainHTML("<strike>");
//  });

//  test("should render completed todo", () => {
//    const todo = {id:2, title:"wash dishes", completed:true,};
//    render(<Todo todo={todo}/>);
//    const todoElement = screen.getByTestId("todo-2");
//    expect(todoElement).toBeInTheDocument();
//    expect(todoElement).toHaveTextContent("wash dishes");
//    expect(todoElement).toContainHTML("strike");
//  });

/////////4//////////

test("matches snapshot", () => {
  const todo = { id: 1, title: "bring milk", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  console.log("tree", tree);
  expect(tree).toMatchSnapshot();
});
