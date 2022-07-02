import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(uiActions.closeCart());
  };

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={onCloseHandler} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
