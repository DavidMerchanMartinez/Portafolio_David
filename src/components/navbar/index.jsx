import { TiThMenu } from "react-icons/ti";
import { GiOcarina } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { BiSolidBriefcase } from "react-icons/bi";
import { useContext } from "react";
import {Contexto } from "../../context";


const Navbar = () => {
     const contexto = useContext(Contexto)
     console.log(contexto.proyectos)
    
    return(
        <div className="grid h-full w-16 bg-teal-950 text-white justify-items-center py-4 content-between rounded-3xl  overflow-hidden">
            <TiThMenu className="h-8 w-8"/>
            <div >
            <MdAccountCircle className="h-8 w-8 hover:scale-125 cursor-pointer "/>

            <BiSolidBriefcase 
            className="h-8 w-8 mt-5 hover:scale-125 cursor-pointer "
            onClick={() => {
                contexto.proyectosAbierto()
            }}
            />

            <FaComputer className="h-8 w-8 mt-5 hover:scale-125 cursor-pointer "/>
            </div>
            <GiOcarina className="h-8 w-8"/>
        </div>
    )
}

export default Navbar