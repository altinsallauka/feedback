import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./actions";
const ModalComponent = (props) => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  let modalIsOpen = globalState.ModalReducer.modalIsOpen;
  // const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    //   setIsOpen(true);
    dispatch(toggleModal(true));
  };
  const closeModal = () => {
    // setIsOpen(false);
    dispatch(toggleModal(false));
  };
  useEffect(() => {
    // console.log(props, "PROPS");
  }, []);
  const customStyles = {
    content: {
      width: "40%",
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div className="row">
          <div className="col-sm">
            <h2>{props.modalTitle}</h2>
          </div>
          <div className="col-sm">
            <button onClick={closeModal} className="float-right btn">
              Close
            </button>
          </div>
        </div>
        <div className="body">{props.children}</div>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
