

export default props => {
    const style = props.bgColor ? {backgroundColor: props.bgColor} : {background: props.bg} || {}
    if (props.bodyMinHeigth) {
        style.minHeight = '100vh!important'
        style.height = 'auto'
    }
    return (
        <div className="Body" id={props.id || null} style={style}>
            {props.children}
        </div>
    )
}