import { useContext } from "react"
import { Contexto } from "../../context"
import Info from "../info"



const Contenedor = () =>{

    const contexto = useContext(Contexto)
    return(
        contexto.proyectos? <Info></Info> : <div>No funciona</div> 
             
    )
}

export default Contenedor