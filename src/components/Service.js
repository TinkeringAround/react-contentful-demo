import React, { Component } from 'react'
import Modal from "../components/Modal";

class Service extends Component {

    state = {
        showModal: false,
        modalIndex: ''
      };

    closeModal = () => {
        this.setState({ showModal: false });
    }

    openModal = (index) => {
        this.setState({ showModal: true, modalIndex: index });
    }

    render () {
        const { service } = this.props

        const modal = 
            <Modal closeModal={this.closeModal} showModal={this.state.showModal} item={service.dienste[this.state.modalIndex]} color={service.iconColor} />

        const serviceItems =
            service.dienste ?
                service.dienste.map((entry, index) => {
                    return (
                        <div className="text-icon-wrapper" key={entry.sys.id} onClick={() => this.openModal(index)}>
                            <img className="icon" src={entry.fields.icon.fields.file.url}  alt={entry.fields.icon.fields.title}  style={{backgroundColor: '#' + service.iconColor}} />
                            <span className="title">{entry.fields.name}</span>
                        </div>
                    )
                }) : null 
    
        return (
            <div className="service">
                <div className="text-icon-wrapper">
                    <img className="icon" src={service.icon.fields.file.url}  alt={service.icon.fields.title} style={{backgroundColor: '#' + service.iconColor}} />
                    <h2 className="title">{service.name}</h2>
                </div>
                <div className="description">
                    <img src={service.image.fields.file.url + '?fit=scale&w=800&h=250'}  alt={service.image.fields.title} />
                    <p>{service.description}</p>
                </div>
                <br />
                <div className="items">
                    {serviceItems}
                </div>
                <br />
                <br />
                {this.state.showModal ? modal : null }
            </div>
        );
    }
}

export default Service;