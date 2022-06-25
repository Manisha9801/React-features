import { useState } from "react";

import "./App.css";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLE = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}  onClick={() => console.log('Event bubbling happens even in portal same like any normal child')}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLE}>Other Content</div>    
    </>
  );
}

export default App;

//The Other content will appear above the Modal even though it's zIndex is less than the modal, this issue comes with over-lay. We use Portals to over come this issue.