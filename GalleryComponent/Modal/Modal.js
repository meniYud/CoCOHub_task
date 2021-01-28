import React from 'react'
import './modal.css';

export default function Modal({ closeModalCB, children }) {
    return (
        <div className={"modal"}>
            <section className="modal-content">
                {children}
                <button className='close-modal' type="button" onClick={closeModalCB}>
                    X
                </button>
            </section>
        </div>
    )
}
