import { useEffect,useRef } from "react";
import SubPackageDescCard from "./SubPackageDescCard"
import {motion, useInView, useAnimation} from "framer-motion"

interface SubPackageCard {
    visible?:boolean;
    onClick?:any;
    data:any;
    selectedOption:any;
}

const SubPackageCard = ({visible,onClick,data,selectedOption}:SubPackageCard) => {

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
            className="flex flex-col justify-start items-start h-fit gap-3">

                <h2 className="font-semibold text-lg">{data.name}</h2>
                <small className="text-gray-600">{data.prerequisite}</small>

                <p className="w-96">{data.description}</p>

                <div className="w-full flex flex-col gap-2">
                    {data.options.map((row:any,idx:number) => (
                        <SubPackageDescCard
                            key={idx}
                            visible={visible}
                            onClick={onClick} 
                            data={row}
                            selectedOption={selectedOption}
                        />
                    ))}
                </div>
                
            </motion.div>

            <div className="w-[400px] h-[300px] bg-gray-500 border">
                
            </div>

        </div>
    )
}

export default SubPackageCard