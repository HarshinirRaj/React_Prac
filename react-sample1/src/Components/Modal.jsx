import classes from './Modal.module.css';
import {useNavigate} from 'react-router-dom';

/*{children} in the below function parameter can also be used as 
function Modal(props){
    <dialog open={true} className={classes.modal}> {props.children}</dialog>
}*/
function Modal({children}){ 

    // programatic navigation instead of using Link
    const navigate = useNavigate();

    function closeHandler(){
        navigate('/')
    }
    return(
        <>
        <div className={classes.backdrop} onClick={closeHandler}/>
        <dialog open={true} className={classes.modal}> {children}</dialog>
        </>
    )
}

export default Modal;