import { Link } from "react-router-dom";
import { useRef,useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
interface IHomeCard {
    location?:any;
    name:string;
    description:string;
    state?:any;
}

const HomeCard = ({location,name,description,state}:IHomeCard) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})

    const mainControls = useAnimation();

    useEffect(() => {
        console.log(isInView);
        if(isInView) {
            mainControls.start("visible")
        }
    },[isInView])

    return (
        <div ref={ref}>
            <motion.div
            variants={{
                hidden: {opacity:0, y:75},
                visible: {opacity:1, y:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 1, delay: 0.50}}
            className="flex gap-20 items-center justify-center">
                <div className="w-96 h-60 bg-gray-500">
                    {/* img here */}
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
            </motion.div>
        </div>
    )   
}

export default HomeCard