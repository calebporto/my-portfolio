export default props => {
    return (
        <div className="PortfolioItem">
            <p className="Title">{props.title}</p>
            <div className="Video">
                {props.children[0]}
            </div>
            <p className="Description">{props.description}</p>
        </div>
    )
}