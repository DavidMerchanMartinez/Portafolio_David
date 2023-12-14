import { useContext } from "react";
import { Contexto } from "../../context";


const Hobbys = () => {
const contexto = useContext(Contexto);

    return(
        <div className=" overflow-hidden">
            <div className={`scrollbar-custom 
                m-6 w-[46rem] flex flex-col overflow-y-scroll overflow-hidden translate-x-[45rem]
                ${contexto.efectoHobbys ? 'translate-x-[0rem]  duration-1000' : ''}`}
                >
                <div className=" flex flex-col">
                    <h1 className="text-3xl font-bold text-center mb-6 text-white">Hobbys</h1>
                </div>

                <div className="  grid  grid-cols-2 justify-items-center mt-5">
                    <div className="contenedor bg-none" >
                        <h1 className="text-white text-2xl font-bold tracking-wide m-4 text-center">Deportes</h1>
                        <h1 className="text-white text-base mb-4 text-justify mb-0">Me apasiona el mundo del deporte, y encuentro en la actividad fisica no solo una forma de mantenerme en forma, sino tambien una ventana hacia la autodisciplina, actualmente voy al gimnasio, antes salia a trotar y practicaba deportes como el futbol. </h1>
                        <h1 className=" text-center text-[8rem] ">⚽​</h1>
                    </div>
                    <div className="contenedor bg-none" >
                        <h1 className="text-white text-2xl font-bold tracking-wide m-4 text-center">Programar</h1>
                        <h1 className="text-white text-base mb-4 text-justify mb-0">Desde hace 3 años conoci el mundo de la programacion y hasta el dia de hoy me sigue encantando, la programación me permite dar vida a mis ideas y a mi creatividad como lo fue este proyecto y demas que he realizado. </h1>
                        <h1 className=" text-center text-[8rem] ">👨🏽‍💻​</h1>
                    </div>
                </div>

            
            </div>   
            </div>
    )
}


export default Hobbys