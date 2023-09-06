interface IWideButton {
    label:string;
    type?:string;
}

export const WideButton = ({label,type}:IWideButton) => {

    let style:string = type === "primary" ? `bg-[#0C71C3]`:`border border-[#0C71C3]`

    return (
        <div className={`${style} flex gap-2 px-3 py-1 rounded-lg items-center shadow-lg cursor-pointer`}>
            <div>O</div>
            <p className={`font-bold text-xs ${type === "primary" ? 'text-white':'text-[#0C71C3]'}`}>{label}</p>
        </div>
    )
}
