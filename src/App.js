import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import DisplayWord from "./components/DisplayWord"
import ColoredWord from "./components/ColoredWord"


function App() {
  
  const Home = ()=>{
    return(
      <fieldset>
        <legend> Heeelow, u are home! </legend>
      </fieldset>
    )
  }

  const Error = ()=>{
    return(
      <fieldset>
        <legend> Error = L+Bozo, bot, fix KODE</legend>
      </fieldset>
    )
  }

  
  return (
    <BrowserRouter>
    <h1> V6 Router </h1>

  
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:keyword" element={<DisplayWord />} />
      <Route path="/:word/:color" element={<ColoredWord />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
