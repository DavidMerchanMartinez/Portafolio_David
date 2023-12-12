import { TiThMenu } from "react-icons/ti";
import { GiOcarina } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { BiSolidBriefcase } from "react-icons/bi";

const Navbar = () => {
    return(
        <div className="grid h-full w-16 bg-cyan-700 text-white justify-items-center py-4 content-between">
            <TiThMenu className="h-8 w-8"/>
            <div >
            <MdAccountCircle className="h-8 w-8"/>
            <BiSolidBriefcase className="h-8 w-8 mt-5 "/>
            <FaComputer className="h-8 w-8 mt-5"/>
            </div>
            <GiOcarina className="h-8 w-8"/>
        </div>
    )
}

export default Navbar