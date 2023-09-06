import SubPackageDescCard from "./SubPackageDescCard"

interface SubPackageCard {
    visible?:boolean;
    onClick?:any;
    data:any;
}

const SubPackageCard = ({visible,onClick,data}:SubPackageCard) => {
    return (
        <div className="flex gap-20 items-center justify-center">

            <div className="flex flex-col justify-start items-start h-fit gap-3">

                <h2 className="font-semibold text-lg">{data.name}</h2>
                <small className="text-gray-600">{data.prerequisite}</small>

                <p className="w-96">{data.description}</p>

                <div className="w-full flex flex-col gap-2">
                    {data.options.map((row:any,idx:number) => (
                        <SubPackageDescCard
                            key={idx}
                            visible={visible}
                            onClick={onClick} 
                            data={row}/>
                    ))}
                </div>
                
            </div>

            <div className="w-[400px] h-[300px] bg-gray-500 border">
                test
            </div>

        </div>
    )
}

export default SubPackageCard