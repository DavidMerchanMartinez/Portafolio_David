import { TiThMenu } from "react-icons/ti";
import { GiOcarina } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { BiSolidBriefcase } from "react-icons/bi";
import { useContext } from "react";
import {Contexto } from "../../context";

import "./navbar.css"


const Navbar = () => {
     const contexto = useContext(Contexto)
    

    
    return(
        <div className="
                       grid h-[100%] w-[5%] bg-teal-950 text-white justify-items-center py-4 content-between rounded-3xl  overflow-hidden
                       laptop:flex laptop:w-[100%] laptop:h-[5%] laptop:items-center laptop:justify-between laptop:px-6 laptop:mt-3
                       
                       "> 
            
                          
           
            <TiThMenu 
            className="h-8 w-8 cursor-pointer hover:scale-125 "
            onClick={() => {
                contexto.barraAbierto()
            }
            }
            />

            <div className="laptop:flex "  >
            <MdAccountCircle 
            className={`h-8 w-8 hover:scale-125 cursor-pointer ${contexto.efectoBarra? "terremoto" : ""}  `}
            onClick={() =>{
                contexto.infoAbierta()
                contexto.proyectosCerrados()
                contexto.hobbysCerrados()
                contexto.barraCerrado()
               
            }}
            />

            <BiSolidBriefcase 
            className={` h-8 w-8 hover:scale-125 cursor-pointer mt-8 ${contexto.efectoBarra? "terremoto" : ""} laptop:mt-0 laptop:ml-5 `}
            onClick={() => {
                contexto.funcionProyecto() 
            }}
            />

            <FaComputer 
            className={`h-8 w-8 hover:scale-125 cursor-pointer mt-8 ${contexto.efectoBarra? "terremoto" : ""} laptop:mt-0 laptop:ml-5 `}
            onClick={() => {
                contexto.hobbysAbierto()
                contexto.infoCerrada()
                contexto.proyectosCerrados()
                contexto.barraCerrado()
            }}
            />
            
            </div>
            <GiOcarina className="h-8 w-8"/>
        </div>
    )
}

export default Navbar