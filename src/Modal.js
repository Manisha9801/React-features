import {createPortal} from 'react-dom'

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "orange",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "grey",
  zIndex: 1000,
};

const Modal = (props) => {
  if (!props.isOpen) return null;
  return createPortal   //Replace createPortal and run code to see the porblem that came up, which portal solved
  (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={props.closeModal}>Close</button>
        {props.children}
      </div>
    </>,
    document.getElementById('portal')
  )
};

export default Modal;
