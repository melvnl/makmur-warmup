import React from "react";
import './index.css'

const Modal = ({ setIsOpen }) => {
    return (
      <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Add Book</h5>
            </div>
            <button className="closeBtn" onClick={() => setIsOpen(false)}>
              x
            </button>
            <div className="modalContent">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  

export default Modal;