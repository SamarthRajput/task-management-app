export const Button = ({label, onClick}) => {
    return <div>
        <button onClick={onClick} className="text-white w-full bg-green-500 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button">{label}</button>
    </div>  
}

export const Button2 = ({label}) => {
    return <div>
        <button className="text-white w-full bg-green-800 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
    </div>
}