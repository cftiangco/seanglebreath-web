import { useEffect,useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
import { ButtonPrimary } from "./Button";
interface SubPackageCard {
    onClick?:any;
    data:any;
}

const SubPackageCard = ({data}:SubPackageCard) => {

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
        <div ref={ref} className="flex gap-20 items-center justify-center">

            <motion.div 
             variants={{
                hidden: {opacity:0, y:75},
                visible: {opacity:1, y:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.25}}
            className="flex flex-col justify-start items-start h-fit gap-4">

                <h2 className="font-semibold text-lg">{data.name}</h2>
                <small className="text-gray-600">{data.prerequisite}</small>

                <p className="w-96">{data.description}</p>

                <div className="flex justify-center items-center w-full">
                    <ButtonPrimary label="View"/>
                </div>
                
            </motion.div>

            <div className="hidden md:block w-[400px] h-[300px] bg-gray-500 border">
                
            </div>
            

        </div>
    )
}

export default SubPackageCard