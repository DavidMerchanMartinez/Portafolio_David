import Navbar from "../../components/navbar"
import Foto from "../../components/foto"
import Contenedor from "../../components/contenedor"
import "./App.css"

function App() {
  return (
    <div className=" absolute h-screen w-[100%] bg-black" >
      <div className=" bg-teal-950 my-[5%] mx-[7%] h-[80%] w-[86%] flex rounded-3xl
                        laptop:flex-col laptop:h-[95%]
                      ">
                        
        <Navbar/>
        <Foto/>
        <Contenedor/>
      </div>
    </div>
    
  )
}

export default App
