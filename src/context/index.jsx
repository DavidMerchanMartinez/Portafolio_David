import { createContext, useEffect, useState } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({children}) => {
    
    //informacion
    const [mostrarInfo, setMostrarInfo] = useState(true)
    const infoAbierta = () => setMostrarInfo(true)
    const infoCerrada = () => setMostrarInfo(false)

     // informacion efecto
   const [mostrarEfectoInfo, setMostrarEfectoInfo] = useState(false);

   

    
    //proyecto
   const [proyectos, setProyectos] = useState(false)
   const proyectosAbierto = () => setProyectos(true)
   const proyectosCerrados = () => setProyectos(false)

   //proyecto efectos
   const [efectoProyecto,setEfectoProyecto] = useState(false)


    //hobbys
    const [hobbys, setHobbys] = useState(false)
    const hobbysAbierto = () => setHobbys(true)
    const hobbysCerrados = () => setHobbys(false)
    
    //hobbys efectos
    const [efectoHobbys,setEfectoHobbys] = useState(false)

     //barra
     const [barra, setBarra] = useState(false)
     const barraAbierto = () => setBarra(true)
     const barraCerrado = () => setBarra(false)
     
     //barra efectos
     const [efectoBarra,setEfectoBarra] = useState(false)

     
     const [efectoTimer, setEfectoTimer] = useState(null);
 
     const reiniciarEfecto = () => {
            barraCerrado();
            setEfectoTimer(null);
     }

     const funcionProyecto = () =>{
                proyectosAbierto()
                infoCerrada()
                hobbysCerrados()
                barraCerrado()
     }
    
 
     useEffect(() => {
         if (efectoBarra) {
             // Si ya hay un temporizador en marcha, limpiarlo
             if (efectoTimer) {
                 clearTimeout(efectoTimer);
             }
 
             // Configurar un nuevo temporizador para reiniciar el efecto después de 2000 milisegundos (2 segundos)
             const timer = setTimeout(reiniciarEfecto, 3000);
             setEfectoTimer(timer);
         }
     }, [efectoBarra]);


   useEffect(()=>{
    setMostrarEfectoInfo(mostrarInfo)
   },[mostrarInfo])


    useEffect(()=>{
        setEfectoProyecto(proyectos)
    },[proyectos])



    useEffect(() => {
        setEfectoHobbys(hobbys)
    },[hobbys])


    useEffect(() => {
        setEfectoBarra(barra)
    },[barra])


   

    return(
        <Contexto.Provider value={{
            proyectos,
            setProyectos,
            proyectosAbierto,
            proyectosCerrados,
            mostrarEfectoInfo,
            setMostrarEfectoInfo,
            mostrarInfo,
            setMostrarInfo,
            infoAbierta,
            infoCerrada,
            efectoProyecto,
            setEfectoProyecto,
            hobbys,
            setHobbys,
            hobbysAbierto,
            hobbysCerrados,
            efectoHobbys,
            setEfectoHobbys,
            barra,
            setBarra,
            barraAbierto,
            barraCerrado,
            efectoBarra,
            setEfectoBarra,
            funcionProyecto
        }}>
            {children}
        </Contexto.Provider>
            
        

    )
}
