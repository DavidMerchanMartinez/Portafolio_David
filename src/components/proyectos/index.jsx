import { useContext } from "react";
import { Contexto } from "../../context";




const Proyectos = () => {
    const contexto = useContext(Contexto);
    console.log(contexto.error)

    return(
        <div className=" overflow-hidden flex">
        <div className={`scrollbar-custom 
            m-6 w-[46rem] flex flex-col overflow-y-scroll overflow-hidden 
            laptop:w-[90%] 
            ${contexto.efectoProyecto? 'scale-100 duration-1000' : 'scale-50'}`}
            >
            <div className=" flex flex-col">
                <h1 className="text-3xl font-bold text-center mb-6 text-white">Proyectos</h1>
            </div>

            <div className="  grid  grid-cols-2 justify-items-center mt-5 laptop:flex laptop:flex-col">
                <div className="contenedor bg-none laptop:px-2" >
                    <h1 className="text-white text-2xl font-bold tracking-wide m-4 text-center">LOGINS</h1>
                    <h1 className="text-white text-base mb-4 text-justify">6 diferentes tipos de logins con sus apartados de registrarse e ingresar, cada uno de ellos tienen distintos efectos y estilos, a su vez son responsive y estos estan realizados con JavaScript, CSS y html.</h1>
                    
                    <a href="https://davidmerchanmartinez.github.io/maquetados-login/html/index.html">
                            <img 
                            src="https://i.ibb.co/Hrx2y4F/imagen-proyecto1.png" 
                            alt="💻"
                            className=" rounded-lg mb-3 w-[100%] h-[10rem] text-9xl text-center"
                            />                
                        </a>
                       
                </div>

                <div className="contenedor bg-none laptop:px-2" >
                    <h1 className="text-white text-2xl font-bold tracking-wide m-4 text-center">Ecommerce</h1>
                    <h1 className="text-white text-base mb-4 text-justify">Se realizo un Ecommerce en react con vite y tailwind en donde se puede navegar entre distintos menus, realizar compras y ver estas mismas tanto de forma individual como grupal. </h1>
                    <a href="https://main--dynamic-david-tienda.netlify.app/sing-out">
                            <img 
                            src="https://i.ibb.co/Q6bW6CN/imagen-proyecto2.png" 
                            alt="🏪" 
                            className=" rounded-lg mb-3 w-[100%] h-[10rem] text-9xl text-center"
                            />   
                        </a>
                </div>

                <div className="contenedor bg-none laptop:px-2" >
                    <h1 className="text-white text-2xl font-bold tracking-wide m-4 text-center">Buscador Gifs</h1>
                    <h1 className="text-white text-base mb-4 text-justify">Se realizo un Buscador de gifs en react con vite y tailwind en donde se puede se pueden filtrar gifs, tiene responsive para celular y tablet. </h1>
                    <a href="https://buscador-de-gifs-07.netlify.app/">
                            <img 
                            src="https://i.ibb.co/KGnwRZV/imagen-proyecto3.png" 
                            alt="🏪" 
                            className=" rounded-lg mb-3 w-[100%] h-[10rem] text-9xl text-center"
                            />   
                        </a>
                </div>
            </div>

           
        </div>   
        </div>
    )
    
}

export default Proyectos