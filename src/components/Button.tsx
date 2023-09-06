import { Link } from "react-router-dom";

interface IButton {
    onClick?:any;
    label:string;
    to?:any;
    state?:any;
}

export const ButtonPrimary = ({label}:IButton) => {
    return (
        <button 
            className="px-8 border-2 py-1 border-[#0C71C3] text-[#0C71C3] font-semibold rounded hover:text-white hover:bg-[#0C71C3]">
                {label}
        </button>
    )
}

export const ButtonPrimaryLink = ({label,to,state}:IButton) => {
    return (
        <Link
            to={to}
            state={state}
            className="px-8 border-2 py-1 border-[#0C71C3] text-[#0C71C3] font-semibold rounded hover:text-white hover:bg-[#0C71C3]">
                {label}
        </Link>
    )
}

export const ButtonLink = ({label,to,state}:IButton) => {
    return (
        <Link
            to={to}
            state={state}
            className="px-8 border-2 py-1 text-white font-semibold rounded hover:text-white hover:bg-[#0C71C3] hover:border-[#0C71C3]">
                {label}
        </Link>
    )
}