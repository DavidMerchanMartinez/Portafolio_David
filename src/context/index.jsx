import { createContext, useEffect, useState } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({children}) => {
    
    //proyecto
   const [proyectos, setProyectos] = useState(false)
   const proyectosAbierto = () => setProyectos(true)
   const proyectosCerrados = () => setProyectos(false)

   // informacion
   const [mostrarInfo, setMostrarInfo] = useState(false);

   useEffect(()=>{
    setMostrarInfo(proyectos)
   },[proyectos])

   

    return(
        <Contexto.Provider value={{
            proyectos,
            setProyectos,
            proyectosAbierto,
            proyectosCerrados,
            mostrarInfo,
            setMostrarInfo
        }}>
            {children}
        </Contexto.Provider>
            
        

    )
}
