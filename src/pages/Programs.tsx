import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SectionText from "../components/SectionText";
import { SmallSeparator } from "../components/Utils";
import PackageCard from "../components/PackageCard";

const Programs = () => {
    const location = useLocation();
    const { data } = location.state
    const packages = data.packages;
    console.log(`data`, data)

    return (
        <>
            <div className="h-[550px] w-full bg-gray-500">
                <Header />
            </div>

            <div className="w-full my-6">
                <p className="text-center mx-3 md:mx-40 text-gray-600">{data.description}</p>
            </div>

            <div className="mt-20" />

            <SectionText text={data.name.toUpperCase()} />

            <SmallSeparator />

            {packages?.length > 0 ? (
                 <div className="y-20 flex-col gap-20 flex justify-around align-center mx-10">
                    {packages.map((row:any, idx:number) => (
                        <PackageCard
                            key={idx}
                            data={row}
                        />
                    ))}
                </div>
            ):null}

            <div className="mb-40"/>


        </>
    )
}

export default Programs;