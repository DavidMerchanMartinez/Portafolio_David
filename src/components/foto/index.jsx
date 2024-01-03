import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import "./foto.css"



const Foto = () => {
    return(
        <div 
        className="contenedor-principal relative h-[115%] w-2/5  rounded-3xl overflow-hidden -mt-9 bg-white flex justify-center laptop:hidden">
                   
            <img className="w-full h-full" src="https://i.ibb.co/QPJHgPw/david-jpeg.jpg" alt="imagen" />
            <div className="absolute z-10 text-white top-[72%]  ">
                <h1 className="font-serif text-4xl" >David Merchan</h1>
                <h1 className="font-sans text-2xl mt-3">Desarrollador FrontEnd </h1>
                <div className="flex items-center justify-center mt-4">
                    <a href="https://www.linkedin.com/in/david-merchan-martinez-12519a281/"><CiLinkedin className="h-9 w-9 mr-5 cursor-pointer hover:scale-150" /></a>
                    <a href="https://github.com/DavidMerchanMartinez?tab=repositories"><IoLogoGithub className="h-9 w-9 mr-5 cursor-pointer hover:scale-150"/></a>
                </div>
            </div>
        </div>
    )
}

export default Foto