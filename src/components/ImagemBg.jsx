import Image from "next/image"

export default props => {
    return (
        <div className="ImagemBg">
            <Image src={props.link}  width= {1000} height={1000}
            ></Image>
        </div>
    )
}