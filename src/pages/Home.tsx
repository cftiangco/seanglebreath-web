import { useState } from "react";
import { data } from "../utils/globalConfig";
import HomeCard from "../components/HomeCard";
import SectionText from "../components/SectionText";
import { WideButton } from "../components/WideButton";
import Header from "../components/Header";
import { SmallSeparator } from "../components/Utils";

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import heroImage1 from '../assets/images/hero-back-1.jpg'
import heroImage2 from '../assets/images/hero-back-2.jpg'


const slideImages = [
    {
      url: heroImage1,
      caption: "Explore the depths<br/> of your soul through<br/> free diving"
    },
    {
      url: heroImage2,
      caption: "Explore the depths<br/> of your soul through<br/> free diving"
    },
  ];

const Home = () => {

    const [clickChangeImage,setClickChangeImage] = useState<boolean>(true);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    const setSelectedIndex = (index:any) => {
        setClickChangeImage(true)
        setSelectedImageIndex(index);
    };

    return (
        <>
            <div>
                <Header />

                <Fade autoplay={true} onChange={() => setClickChangeImage(false)} onStartChange={() => setClickChangeImage(false)}>
                    {slideImages.map((slideImage, index)=> (
                        <div 
                            key={index}
                            style={{ backgroundImage: clickChangeImage ? "url('"+ slideImages[selectedImageIndex].url +"')" : "url('"+ slideImage.url +"')" }} 
                            className={`h-[520px] md:h-screen w-full bg-cover bg-center relative cursor-pointer`}>
                            <div className="flex justify-center flex-col items-center h-full w-1/2 absolute">
                                <h1 className="text-3xl md:text-7xl font-bold text-white ml-7 mt-20 md:mt-20">Explore the depths<br/> of your soul through<br/> free diving</h1>
                            </div>
                        </div>
                    ))} 
                </Fade>
            </div>

            <div className="mt-30"/>

            <div className="flex items-center justify-center gap-1 md:gap-2 mx-5 md:mx-0 my-10">
                {slideImages.map((row,idx) => (
                    <div
                        key={idx} 
                        className={`h-24 w-40 border-2 cursor-pointer bg-cover bg-center ${selectedImageIndex === idx ? "border-4 border-[#0C71C3]":"brightness-75"}`}
                        onClick={() => setSelectedIndex(idx)} 
                        style={{ backgroundImage: "url('"+ row.url +"')" }}></div>
                ))}
            </div>

            <SectionText text="PROGRAMS & PACKAGES"/>

            <SmallSeparator />

            {data.programs?.length ? (
                <div className="y-20 flex-col gap-10 flex justify-center align-center mx-3 d:mx-10">
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