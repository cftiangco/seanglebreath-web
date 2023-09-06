import { FaCaretRight } from "react-icons/fa";

interface ISubPackageDescCard {
    data:any;
    visible?:boolean;
    onClick?:any;
}

const SubPackageDescCard = ({data,visible,onClick}:ISubPackageDescCard) => {
    return (
        <div className="border-b py-2">

            <div className="gap-1 w-full py-2 cursor-pointer" onClick={onClick}>
                <div className="flex items-center">
                    <FaCaretRight className="text-[#0C71C3]"/>
                    <h4 className="font-bold">{data.name}</h4>
                </div>
            </div>

            <div className={`${visible ? 'block':'hidden'} w-96 ms-10 mt-5`}>
                <ul className="list-disc text-gray-500">
                    {data.values.map((value:string,idx:number) => (
                        <li key={idx}>{value}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default SubPackageDescCard;