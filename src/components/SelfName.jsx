export default props => {
    return (
        <div className="SelfName">
            <p className="SelfName Name">
                {props.selfName}
            </p>
            <p className="SelfName Description">
                {props.description}
            </p>
        </div>
    )
}