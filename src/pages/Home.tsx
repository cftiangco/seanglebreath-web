import { data } from "../utils/globalConfig";
import HomeCard from "../components/HomeCard";
import SectionText from "../components/SectionText";
import { WideButton } from "../components/WideButton";
import Header from "../components/Header";
import { SmallSeparator } from "../components/Utils";

const Home = () => {
    return (
        <>
            <div className="h-[420px] md:h-screen w-full bg-gray-500">
                <Header />
            </div>

            <div className="flex items-center justify-center gap-10 my-10">
                <div className="h-24 w-40 border-2 bg-gray-500"></div>
                <div className="h-24 w-40 border-2 bg-gray-500"></div>
                <div className="h-24 w-40 border-2 bg-gray-500"></div>
            </div>

            <SectionText text="PROGRAMS & PACKAGES"/>

            <SmallSeparator />

            {data.programs?.length ? (
                <div className="y-20 flex-col gap-10 flex justify-center align-center mx-10">
                    {data.programs.map((row:any,idx:number) => (
                        <HomeCard 
                            location={`/programs/${row.url}`}
                            state={{data:row}}
                            name={row.name.toUpperCase()}
                            description={row.description} 
                            key={idx}/>
                    ))}
                </div>
            ): null}
            
            <div className="mt-40"/>

            <SectionText text="OUR SOCIAL PRESENSCE"/>

            <div className="flex flex-col md:flex-row justify-center gap-7 my-10 mx-20 md:mx-0">
                <WideButton type={`primary`} label={`Follow us on Facebook`}/>
                <WideButton type={`test`} label={`Follow us on Instagram`} />
            </div>

        </>
    )
}

export default Home;