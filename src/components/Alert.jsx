import { useRouter } from 'next/router'

const Alert = (props) => {
    const router = useRouter()
    const action = () => {
        if (props.clickAction) {
            router.push(props.clickAction)
        }
    }
    const actionStyle = props.clickAction ? {cursor: 'pointer', width: '100%'} : {width: '100%'}
    return (
        props.show ? (
        <div className={`alert alert-${props.type} alert-dismissible fade show`} style={actionStyle} tabIndex={0}>
            <span onClick={() => action()}>{ props.message }</span>
            <button onClick={() => props.handleShow(false) } autoFocus type="button" className="btn-close" data-bs-dismiss="alert"  aria-label="Close"></button>
        </div>
        ) : null
    )
}
export function _throwAlert(
    setAlertShow, 
    setAlertMessage, 
    setType, 
    message, 
    type
    ) {
    setAlertShow(true)
    setAlertMessage(message)
    setType(type)
}
export default Alert