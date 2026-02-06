import { Route, Routes} from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";
import Home from "./Components/Home";
import Contect from "./Components/Contect";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Poshak from "./Components/Poshak";
import About from "./Components/About";

export default function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Mainlayout/>}>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/poshak" element={<Poshak/>}/>
         <Route path="contect" element={<Contect/>}/>
         
       </Route>

       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
     </Routes>
    </>
  );
}
