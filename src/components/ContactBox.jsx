import { useState } from "react"
import Alert from "./Alert"
import { _throwAlert } from "./Alert"

export default function ContactBox(props) {
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [alertShow, setAlertShow] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertType, setAlertType] = useState('danger')
    const [sending, setSending] = useState(false)

    function throwAlert(message, type) {
        _throwAlert(setAlertShow, setAlertMessage, setAlertType, message, type)
    }
    function sendEmail(button) {
        function cleanForm() {
            setText('')
            setEmail('')
        }
        if (!email || !text) {
            throwAlert('Preencha o formulário corretamente.', 'danger')
        } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.length < 8) {
            throwAlert('E-mail incorreto.', 'danger')
        } else {
            if (!sending) {
                setSending(true)
                const body = {
                    email: email,
                    text: text
                }
                fetch('/api/send-email', {
                    method: 'POST',
                    body: JSON.stringify(body)
                }).then(response => {
                    if (!response.ok) {
                        throwAlert('Algo deu errado. Tente novamente mais tarde.', 'danger')
                        cleanForm()
                        setSending(false)
                    } else {
                        throwAlert('Seu contato foi enviado, e logo entrarei em contato com você.', 'success')
                        cleanForm()
                        setSending(false)
                    }
                })
            }

        }
    }
    return (
        <div className="ContactBox">
            <Alert message={alertMessage} setMessage={setAlertMessage} type={alertType} show={alertShow} handleShow={setAlertShow} ></Alert>
            <p className="Title">Seu e-mail principal:</p>
            <input onInput={(e) => setEmail(e.currentTarget.value)} value={email} type="text" className="EmailInput" />
            <p className="Title">Deixe sua mensagem &#128221;:</p>
            <textarea onChange={(e) => setText(e.target.value)} value={text} className="Message" id="message" cols="50" rows="10" maxLength={500}></textarea>
            <button onClick={(e) => sendEmail(e.target)} className="Button">
                {sending ? (
                    <div class="spinner-border spinner-border-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                ) : 'Enviar'}
            </button>
        </div>
    )
}