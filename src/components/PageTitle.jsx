export default props => {
    const style = {
        color: props.color || 'black',
        borderColor: props.borderColor || null
    }
    return (
        <div className="PageTitle" style={style}>
            <p>
                {props.text}
            </p>
        </div>
    )
}