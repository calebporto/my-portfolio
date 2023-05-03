export default props => {
    function setFocus() {
        const target = document.querySelector(props.link || null)
        if (target) {
            target.scrollIntoView({behavior: 'smooth'})
        }
    }
    return (
        <div className="MenuBt" onClick={() => setFocus()}>
            {props.label}
        </div>
    )
}