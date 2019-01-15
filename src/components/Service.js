import React from "react";

const Service = props => {
    const { service } = props

    const serviceItems =
    service.dienste ?
        service.dienste.map(entry => {
            return (
                <div className="text-icon-wrapper" key={entry.sys.id}>
                    <img className="icon" src={entry.fields.icon.fields.file.url}  alt={entry.fields.icon.fields.title}  style={{backgroundColor: '#' + service.iconColor}} />
                    <span className="title">{entry.fields.name}</span>
                </div>
            )
        })
        : null

    return (
        <div className="service">
            <div className="text-icon-wrapper">
                <img className="icon" src={service.icon.fields.file.url}  alt={service.icon.fields.title} style={{backgroundColor: '#' + service.iconColor}} />
                <h2 className="title">{service.name}</h2>
            </div>
            <div className="description">
                <img src={service.image.fields.file.url + '?fit=crop&w=680&h=300'}  alt={service.image.fields.title} />
                <p>{service.description}</p>
            </div>
            <div className="items">
                {serviceItems}
            </div>
            <br />
            <p className="text-grey">
                Hinweis: Je nach Ausstattung Ihres Fahrzeugs und Land, in dem Sie sich befinden, stehen ggf. nicht alle (Teil-) Funktionen zur Verfügung.
            </p>
            <br />
        </div>
    );
};

export default Service;