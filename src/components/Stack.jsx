import Image from "next/image"

export default props => {
    return (
        <div className="Stack">
            <Image src={props.stackImg}></Image>
        </div>
    )
}