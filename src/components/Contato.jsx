import Image from "next/image";

export default function Contato() {
    return (
        <div className="Contato">
            <div className="Item">
                <Image
                    src="/media/whatsapp.png"
                    alt=""
                    width={100}
                    height={100}
                    className="Img"
                />
                {/* <img src="/media/whatsapp.png" alt="" className="Img" /> */}
                <p className="Text">(22) 99924-8349</p>
            </div>
            <div className="Item">
                <Image
                    src="/media/e-mail.png"
                    alt=""
                    width={100}
                    height={100}
                    className="Img"
                />
                {/* <img src="/media/e-mail.png" alt="" className="Img" /> */}
                <p className="Text">calebbds@gmail.com</p>
            </div>
        </div>
    )
}