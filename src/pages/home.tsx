import { colors, data } from "../utils/globalConfig";
import HomeCard from "../components/HomeCard";
import SectionText from "../components/SectionText";
import { WideButton } from "../components/WideButton";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SmallSeparator } from "../components/Utils";

const Home = () => {
    return (
        <>
            <div className="h-screen w-full bg-gray-500">
                <Header />
            </div>

            <div className="flex items-center justify-center gap-10 my-10">
                <div className="h-24 w-40 border-2">1</div>
                <div className="h-24 w-40 border-2">2</div>
                <div className="h-24 w-40 border-2">3</div>
            </div>

            <SectionText text="PROGRAMS & PACKAGES"/>

            <SmallSeparator />

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
            
            <div className="mt-40"/>

            <SectionText text="OUR SOCIAL PRESENSCE"/>

            <div className="flex justify-center gap-7 my-10">
                <WideButton type={`primary`} label={`Follow us on Facebook`}/>
                <WideButton type={`test`} label={`Follow us on Instagram`} />
            </div>

        </>
    )
}

export default Home;