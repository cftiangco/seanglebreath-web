
interface ISectionText {
    text:string;
}

const SectionText = ({text}:ISectionText) => {
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl font-bold">{text}</h1>
        </div>
    )
}

export default SectionText