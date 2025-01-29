import { Link } from "react-router-dom"

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
        <Link to={'/signup'}>
            <button className="text-sm rounded-full bg-green-500 text-white font-medium px-5 py-2 text-center me-2 mb-2">Get started </button>
        </Link>
    </div>
</div>
}