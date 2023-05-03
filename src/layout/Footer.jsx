export default props => {
    return (
        <div className="Footer">
            <div className="RedesSociais">
                <div className="Item">
                    <img id="linkedin" src="/media/linkedin.png" alt="" 
                    onClick={() => window.open('https://www.linkedin.com/in/calebportodev/')}/>
                </div>
                <div className="Item">
                    <img id="github" src="/media/github.png" alt="" 
                    onClick={() => window.open('https://github.com/calebporto')}/>
                </div>
                <div className="Item">
                    <img id="instagram" src="/media/instagram.png" alt="" 
                    onClick={() => window.open('https://www.instagram.com/caleb_porto/')}/>
                </div>
            </div>
            <div className="Copy">
                <p>
                    &copy; 2023 - Caléb Rangel Porto
                </p>
            </div>
        </div>
    )
}