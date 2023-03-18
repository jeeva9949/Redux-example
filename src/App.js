import "./App.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";



function App() {
  const mystate = useSelector((state) => state.ChangeNumber);
  console.log(mystate);
  const dispatch = useDispatch();
  console.log(dispatch)
  return ( 
    <>
      <Header>Redux in react js </Header>
      <Counter>
        <button onClick={() => dispatch(incNumber())}>+</button>
        <p>{ mystate}</p>
        <button onClick={() => dispatch(decNumber())}>-</button>
      </Counter>
    </>
  );
}



const Header = styled.h1`
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  color: red;
  opacity: 0.2;
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    font-size: 20px;
    margin: 10px;
  }
`;

export default App;
