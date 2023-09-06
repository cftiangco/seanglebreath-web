import { Link } from "react-router-dom";
interface IHomeCard {
    location?:any;
    name:string;
    description:string;
    state?:any;
}

const HomeCard = ({location,name,description,state}:IHomeCard) => {
    return (
        <div className="flex gap-20 items-center justify-center">
            <div className="w-96 h-60 bg-gray-500">
                img
            </div>
            <div className="w-96 flex justify-between flex-col gap-7">
                <Link 
                    to={location}
                    state={state} 
                    className="font-bold text-2xl cursor-pointer">{name}</Link>
                <div>
                    {description}
                </div>
                <div>
                    <a href="">Read More</a>
                </div>
            </div>
        </div>
    )   
}

export default HomeCard