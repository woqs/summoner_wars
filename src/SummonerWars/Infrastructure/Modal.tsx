import React, { ReactNode } from "react"
import "./Modal.css"

const Modal: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="greyModal">
      <div className="modalContent">
        <div style={{ padding: "40px"}}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
