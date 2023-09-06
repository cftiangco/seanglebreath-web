import { colors } from "../utils/colors";
import HomeCard from "../components/HomeCard";

const Home = () => {
    console.log(colors)
    return (
        <>
            <div className="h-screen w-full bg-gray-500">
                <div className='flex justify-between bg-white absolute w-full h-24 items-center'>
                    <div className="ms-20">
                        img
                    </div>
                    <div className="me-20">
                        <ul className="flex gap-5">
                            <li>Discover</li>
                            <li>Dive</li>
                            <li>Develop</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-10 my-10">
                <div className="h-24 w-40 border-2">1</div>
                <div className="h-24 w-40 border-2">2</div>
                <div className="h-24 w-40 border-2">3</div>
            </div>

            <div className="my-10">
                <h1 className="text-center text-4xl font-bold">PROGRAMS & PACKAGES</h1>
            </div>

            <div className={`h-1 w-32 bg-[${colors.primary}] flex mx-auto my-10`}></div>

            <div className="y-20 flex-col gap-10 flex justify-center align-center mx-10">
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>

        </>
    )
}

export default Home;