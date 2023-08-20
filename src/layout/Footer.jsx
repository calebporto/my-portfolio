import Image from "next/image"

export default props => {
    return (
        <div className="Footer">
            <div className="RedesSociais">
                <div className="Item">
                    <Image alt="" id="linkedin" src="/media/linkedin.png"
                    onClick={() => window.open('https://www.linkedin.com/in/calebportodev/')}
                    width= {100} height={100}
                    />
                </div>
                <div className="Item">
                    <Image id="github" src="/media/github.png" alt="" 
                    onClick={() => window.open('https://github.com/calebporto')}
                    width= {100} height={100}
                    />
                </div>
                <div className="Item">
                    <Image id="instagram" src="/media/instagram.png" alt="" 
                    onClick={() => window.open('https://www.instagram.com/caleb_porto/')}
                    width= {100} height={100}
                    />
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