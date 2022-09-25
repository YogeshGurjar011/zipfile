import { Link, Route, Routes } from "react-router-dom";
import First from "./First";
import Second from "./Second";


export default function App()
{
  return <>
  <h1> App Componenet </h1>
  <Link to='/first'> First</Link> &nbsp;
  <Link to='/second'> Second</Link> &nbsp;
  <hr/>

  <Routes>
    <Route path="/first" element={<First/>}/>
    <Route path="/second" element={<Second/>}/>
  </Routes>
  </>
}