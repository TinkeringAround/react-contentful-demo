import React from "react";
import "../styles/modal.scss";

const Modal = props => {
    const { item, color, showModal, closeModal } = props
    return (
        <div className="overlay">
            <div className={showModal ? 'modal' : 'modal hidden'}>
                <div className="modal--header">
                    <div className="btn--close" onClick={closeModal}><i className="fas fa-times fa-2x"></i></div>
                    <div className="text-icon-wrapper">
                    <img className="icon" src={item.fields.icon.fields.file.url}  alt={item.fields.icon.fields.title}  style={{backgroundColor: '#' + color}} />
                    <span className="title">{item.fields.name}</span>
                </div>
                </div>
                <div className="modal--content">
                    <img src={item.fields.image.fields.file.url + '?fit=fill&w=670'}  alt={item.fields.image.fields.title} />
                    <p>{item.fields.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal