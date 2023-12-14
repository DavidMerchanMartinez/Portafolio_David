import { useContext } from "react"
import { Contexto } from "../../context"
import Info from "../info"
import Proyectos from "../proyectos"
import Hobbys from "../hobbys"



const Contenedor = () =>{

    const contexto = useContext(Contexto)
    return(
        contexto.mostrarInfo? <Info></Info> : contexto.proyectos? <Proyectos/> : <Hobbys/>
        
    )
}

export default Contenedor