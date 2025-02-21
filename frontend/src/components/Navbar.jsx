import { Link } from "react-router-dom"
import { Button2 } from "./ui/Button"

export const Navbar = () => {
    return <div className="flex justify-between px-10 py-4 bg-transparent">
    <div className="font-bold text-3xl ml-36 mt-2 text-white flex justify-center items-center">
       <div>
            TaskME 
       </div>
    </div>
    <div className="mt-2 mr-8 flex justify-center items-center">
        <button className="text-md mr-5 text-slate-300 text-center">Features</button>
        <button className="text-md mr-5 text-slate-300 text-center">Pricing</button>
        <button className="text-md mr-5 text-slate-300 text-center">Integration</button>
        <button className="text-md mr-5 text-slate-300 text-center">Learn</button>
    </div>
    <div className="flex justify-center items-center mr-10">
        <Link to={'/signin'}>
            <button className="text-md mr-5 text-slate-300 text-center">Sign in</button>
        </Link>
        <Button2 label={"Signup"} to={"/signup"}/>
    </div>
</div>
}