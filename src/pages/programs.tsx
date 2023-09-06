import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import SectionText from "../components/SectionText";
import { SmallSeparator } from "../components/Utils";
import SubPackageDescCard from "../components/SubPackageDescCard";
import SubPackageCard from "../components/SubPackageCard";

const Programs = () => {
    const location = useLocation();
    const { data } = location.state
    const [openSubPackageDescCardOpen,setSubPackageDescCardOpen] = useState<boolean>(false);

    const subPackages = data.subPackages;
    console.log(`data`, data)
    return (
        <>
            <div className="h-96 w-full bg-gray-500">
                <Header />
            </div>

            <div className="w-full my-6">
                <p className="text-center mx-40 text-gray-600">{data.description}</p>
            </div>

            <div className="mt-20" />

            <SectionText text={data.name.toUpperCase()} />

            <SmallSeparator />

            <div className="y-20 flex-col gap-20 flex justify-around align-center mx-10">

                {subPackages.map((row:any, idx:number) => (
                    <SubPackageCard
                        key={idx}
                        visible={openSubPackageDescCardOpen} 
                        onClick={() => setSubPackageDescCardOpen(!openSubPackageDescCardOpen)}
                        data={row}
                    />
                ))}

                
            </div>


        </>
    )
}

export default Programs;