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
                <button style={{cursor: 'pointer', padding: 10, backgroundColor:"#FF6F81",color:"#fff", border:"none", fontSize:16, 
                borderRadius:5, outline:0}} onClick={ ()=> setIsOpen(!isOpen)}>Add +</button>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    );
}

