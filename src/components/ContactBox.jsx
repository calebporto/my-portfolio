export default props => {
    return (
        <div className="ContactBox">
            <p className="Title">Deixe sua mensagem &#128221;:</p>
            <textarea className="Message" id="message" cols="50" rows="10" maxLength={500}></textarea>
            <button className="Button">Enviar</button>
        </div>
    )
}