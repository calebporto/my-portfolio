import Image from "next/image"

export default props => {
    return (
        <div className="Stack">
            <Image priority alt="" src={props.stackImg} width= {100} height={100}
            ></Image>
        </div>
    )
}