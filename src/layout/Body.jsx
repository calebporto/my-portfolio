

export default props => {
    const style = props.bgColor ? {backgroundColor: props.bgColor} : {background: props.bg} || {}
    return (
        <div className="Body" id={props.id || null} style={style}>
            {props.children}
        </div>
    )
}