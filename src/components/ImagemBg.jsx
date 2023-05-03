import Image from "next/image"

export default props => {
    return (
        <div className="ImagemBg">
            <Image src={props.link}></Image>
        </div>
    )
}