import { useContext } from "react";
import { Contexto } from "../../context";



const Proyectos = () => {
    const contexto = useContext(Contexto);

    return(
        <div className=" overflow-hidden">
        <div className={`scrollbar-custom 
            m-6 w-[46rem] flex flex-col overflow-y-scroll overflow-hidden scale-50
            ${contexto.efectoProyecto? 'scale-100 duration-1000' : ''}`}
            >
            <div className=" flex flex-col">
                <h1 className="text-3xl font-bold text-center mb-6 text-white">Proyectos</h1>
            </div>

            <div className="  grid  grid-cols-2 justify-items-center mt-5">
                <div className="contenedor bg-none" >
                    <h1 className="text-white text-2xl font-bold tracking-wide m-4 text-center">LOGINS</h1>
                    <h1 className="text-white text-base mb-4 text-justify">6 diferentes tipos de logins con sus apartados de registrarse e ingresar, cada uno de ellos tienen distintos efectos y estilos, a su vez son responsive y estos estan realizados con JavaScript, CSS y html.</h1>
                    <a href="https://davidmerchanmartinez.github.io/maquetados-login/html/index.html">
                        <img 
                        src="src\img\imagen-proyecto1.PNG" 
                        alt="imagen" 
                        className=" rounded-lg mb-3"
                        />
                        </a>
                </div>
                <div className="contenedor bg-none" >
                    <h1 className="text-white text-2xl font-bold tracking-wide m-4 text-center">Ecommerce</h1>
                    <h1 className="text-white text-base mb-4 text-center">blablabla</h1>
                    <a href="https://dynamic-david-tienda.netlify.app/">
                        <img 
                        src="src\img\imagen-proyecto1.PNG" 
                        alt="imagen" 
                        className=" rounded-lg mb-3"
                        />
                        </a>
                </div>
            </div>

           
        </div>   
        </div>
    )
    
}

export default Proyectos