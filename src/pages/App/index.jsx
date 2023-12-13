import Navbar from "../../components/navbar"
import Foto from "../../components/foto"
import Contenedor from "../../components/contenedor"
import "./App.css"

function App() {
  return (
    <div className=" absolute h-screen w-full bg-black top-0" >
      <div className=" bg-teal-950 my-16 mx-24 h-[40rem] flex rounded-3xl">
        <Navbar/>
        <Foto/>
        <Contenedor/>
      </div>
    </div>
    
  )
}

export default App
