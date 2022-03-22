import { useState } from "react";
import Modal from "./Modal";



export default function Header({
    bookTotal
}) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="header-title">
                Books ({bookTotal})
            </div>
            <div className="header-button">
                <button style={{cursor: 'pointer'}} onClick={ ()=> setIsOpen(!isOpen)}>Add +</button>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    );
}

