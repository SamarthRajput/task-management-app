import { Link } from "react-router-dom"

export const Button = ({label, onClick}) => {
    return <div>
        <button onClick={onClick} className="text-white w-full bg-purple-500 hover:bg-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button">{label}</button>
    </div>  
}

export const Button2 = ({label, to}) => {
    return <Link to={to}>
        <button className="text-white w-full bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" >{label}</button>
    </Link>
}