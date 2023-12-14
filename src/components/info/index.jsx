import "./info.css"
import { FaGears } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { PiCertificateDuotone } from "react-icons/pi";
import { MdContactPhone } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { useContext} from "react";
import { Contexto } from "../../context";






const Info = () => {
    const contexto = useContext(Contexto);
 

    return(
        <div className={`scrollbar-custom 
            m-6 w-[46rem] flex flex-col overflow-y-scroll overflow-hidden 
            ${contexto.mostrarEfectoInfo ? 'efecto' : ''}`}
            >
            <div className=" flex flex-col">
                <h1 className="text-3xl font-bold text-center mb-6 text-white">Acerca De Mi</h1>
                <span className=" text-white mx-5 font-serif text-lg leading-7 text-justify mb-4">Como programador junior, soy alguien apasionado por la tecnología y en constante aprendizaje. Desde la universidad he logrado aprender sobre la trabajo en equipo, programación y algunos de sus lenguajes, por mi cuenta he estudiado y realizado diversos proyectos para ampliar mis conocimientos, no obstante estoy emocionado por mejorar aun mas mis habilidades y conocimientos en el campo. Aunque todavía estoy en una etapa de desarrollo, me destaco por mi curiosidad y capacidad para resolver problemas. Estoy dispuesto a asumir nuevos desafíos y aprender de las adversidades para mejorar constantemente. 
                <button className=" bg-white text-teal-950 rounded-lg p-1 ml-3 font-serif text-lg"
                onClick={()=>{
                    contexto.funcionProyecto() 
                }}
                >Proyectos</button></span>
            </div>

            <div className="  grid  grid-cols-2 justify-items-center mt-5">
                <div className="contenedor" >
                    <FaGears className="h-12 w-12 text-white  "/>
                    <h1 className="text-white text-2xl font-bold tracking-wide">Habilidades</h1>
                    <ul className=" -ml-5 text-white mt-3">
                        <li> ⏳ Paciencia y persistencia</li>
                        <li> 📚 Autoaprendizaje</li>
                        <li> 🤝 Trabajo en equipo</li>
                        <li> 🔄 Adaptabilidad</li>
                        <li> 🤔 Pensamiento lógico</li>
                        <li> ⏱️ gestión del tiempo</li>
                        <li> ⚜ Ética laboral</li> 
                    </ul>
                </div>
                <div className="contenedor">
                    <GiBrain className="h-12 w-12 text-white "/>
                    <h1 className="text-white text-2xl font-bold tracking-wide">Conocimientos</h1>
                    <ul className=" -ml-5 text-white mt-3">
                        <li> 💻​​ CSS</li>
                        <li> 💻​​ Git y GitHub</li>
                        <li> 💻​​ HTML </li>
                        <li> 💻​​ JavaScript</li>
                        <li> 💻​​ React</li>
                        <li> 💻​​ tailwind</li>
                    </ul>
                </div>
            </div>

            <div className=" grid  grid-cols-2 justify-items-center mt-9 ">
                <div className="contenedor px-6">
                    <PiCertificateDuotone className="h-12 w-12 text-white"/>
                    <h1 className="text-white text-2xl font-bold tracking-wide">Estudios</h1>
                    <ul className=" -ml-5 text-white ml-2">
                        <li className=" text-lg font-semibold mt-3"> Profesional</li>
                        <li> 🎓​​ Universidad Distrital</li>
                        <li className=" indent-3"> Tnlgo. sistematización de datos </li>
                        <li className=" text-lg font-semibold mt-3 "> Secundaria</li>
                        <li> 🎓Colegio Miravalle</li>
                        <li className=" indent-3"> Bachiller  </li>
                    </ul>
                </div>
                <div className="contenedor w-[17rem] text-justify px-6">
                    <BiSolidBriefcase className="h-12 w-12 text-white"/>
                    <h1 className="text-white text-2xl font-bold tracking-wide mb-3">Experiencia</h1>
                    <span className="text-white text-justify mr-5"> He realizado diversos proyectos, estos se pueden visualizar en el maletin de la barra de la izquierda o en el boton de proyectos en el apartado de "acerca de mi" </span>
                </div>
            </div>

            <div className=" grid  grid-cols-2 justify-items-center mt-9 mb-8">
                <div className="contenedor px-6">
                    <PiCertificateDuotone className="h-12 w-12 text-white"/>
                    <h1 className="text-white text-2xl font-bold tracking-wide">Certificados</h1>
                    <ul className=" -ml-5 text-white ml-2">
                        <li className=" text-lg font-semibold mt-3"> Platzi</li>
                        <li> 🎓​​ Curso practico frontend developer</li>
                        <li> 🎓​​ Curso de React.js </li>
                        <li> 🎓​ Curso de React.js Vite.js  </li>
                        <li className=" indent-3"> y TailwindCSS</li>
                        <li className=" text-lg font-semibold mt-3 "> Udemy</li>
                        <li> 🎓​ GIT Y GITHUB</li>
                        
                    </ul>
                </div>
                <div className="contenedor px-6">
                    <MdContactPhone className="h-12 w-12 text-white"/>
                    <h1 className="text-white text-2xl font-bold tracking-wide">Datos Contacto</h1>
                    <ul className=" -ml-5 text-white ml-2">
                        <li className=" text-lg font-semibold mt-6"> Celular</li>
                        <li> ​📱​​​ 321 361 11 07</li>
                        <li className=" text-lg font-semibold mt-6"> Correo</li>
                        <li> ​​📧​​ merchandavid1632@gmail.com</li>
                    </ul>
                </div>
            </div>

            
            <BsTools className="h-12 w-12 text-cyan-950"/>
        </div>   
    )
    
}

export default Info