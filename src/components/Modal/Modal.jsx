import ReactDOM from "react-dom";
import "./Modal.css";
import { useEffect } from "react";

function Modal({ isOpen, onClose, children, closeOnEscape = true }) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        } 
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && closeOnEscape) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen, onClose, closeOnEscape]);

    const handleOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    if (!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;