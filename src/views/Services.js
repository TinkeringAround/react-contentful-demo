import React, { Component } from 'react'
import Service from "../components/Service";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import "../styles/services.scss";

class Services extends Component {
    state = {
        service: "",
        activeIndex: 0
      };

    componentDidMount() {
        this.fetchData();
      }

      componentWillReceiveProps(newProps) {
        this.props = newProps;
        this.fetchData();
      }
    
      fetchData() {
        const { match } = this.props
        let FINs = {
            "WVWZZZAUZJW000001":[ "63SegZ72j6c8csiqMg8SGo"],
            "WVWZZZAUZJW000002": ["17J33bHrAWIEaMqICcOKes"],
            "WVWZZZAUZJW000003": ["17J33bHrAWIEaMqICcOKes", "6bFO4WVQIgeMYE2qOcmSWQ"]
        }
        let FIN = [FINs[match.params.id]][0]
        let services = []

        return FIN.map(FIN => {
            return this.props.contentful.getEntry(FIN, { locale: this.props.locale})
            .then(entry => {
                if (entry) {
                    if([FINs[match.params.id]][0].length > 1) { 
                            services.push(entry)
                            this.setState({ service: services })
                    } else {
                        this.setState({
                            service: [entry]
                        });
                    }
                } else {
                throw new Error("Could not fetch any data from Contentful.");
            }
            }).catch(error => {
            console.log(error);
            });
        })
      }

      toggleActiveClass(index, props) {
        this.setState({ activeIndex: index });
      }
    
    render () {
        const FINs = ["WVWZZZAUZJW000001", "WVWZZZAUZJW000002", "WVWZZZAUZJW000003"]

        if (this.state.service !== "") {
            const services = this.state.service.map((item, index) => {
                return (
                <Service service={item.fields} key={index} />
                )
            })

            const selection = FINs.map((item, index) => {
                return (
                    <Link to={'/services/' + item + '/' + this.props.locale} key={index} onClick={this.toggleActiveClass.bind(this, index, this.props)}>
                    <div className={this.state.activeIndex === index ? 'select-item active' : 'select-item'}>
                        <i className="fas fa-car-side fa-2x"></i>
                        <p>{item}</p>
                    </div>
                </Link>
                )
            })

            return (
                <div id="services">
                    <div className="header">
                        <h1>Fahrzeugaktivierung</h1>
                    </div>
                    <div className="content-wrapper">
                        <div className="breadcrumb">
                            <ol>
                                <li>Benutzerkonto erstellen</li>
                                <li>Fahrzeug hinzufügen</li>
                                <li className="active">Car-net bestellen</li>
                                <li>Car-net aktivieren</li>
                            </ol>
                        </div>
                        <h2>Bestellen Sie jetzt die folgenden mobilen Online-Dienste</h2>
                        <br />
                        <h3>Wählen Sie ihr Fahrzeug:</h3>
                        <div className="selection">
                            {selection}
                        </div>
                        <br />
                        <br />
                        {services}
                    </div>

                    <section className="agb-submit content-wrapper">
                        <h3>Widerrufsrecht</h3>
                        <p>
                            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen die Bestellung zu widerrufen. <br/>
                            Die Einzelheiten entnhemen Sie bitte der <button className="btn--link">Widerrufsbelehrung</button> im Anhang zu den allgemeinen Geschäftsbedingungen.
                        </p>
                        <br />
                        <h3>Allgemeine Geschäftsbedingungen</h3>
                        <p>
                            Die Allgemeinen Geschäftsbedingungen gelten für Sie in der bei Vertragsabschluss gültigen Fassung.
                            Auf den Webseiten der Volkswagen AG finden sich die Allgemeinen Geschäftsbedingungen immer nur in der aktuellsten Version.
                            Wir empfehlen Ihnen daher, die für Sie geltende Fassung dauerhaft aufzubewahren, indem Sie die Bestellbestätigung und/ oder das <button className="btn--link">hier</button> hinterlegte Dokument speichern.
                        </p>
                        <p><input type="checkbox" id="agb-submit"/><span className="checkmark"></span>Ich habe die <button className="btn--link">Allgemeinen Geschäftsbedingungen</button> gelesen und stimme ihrer Geltung hiermit zu.</p>
                        <p className="text-grey">
                            Hinweis: Mit dem Ender der Dienstelaufzeit endet der Vertrag über die mobilen Online-Dienste automatisch, ohne dass es einer Kündigung durch die Volkswagen AG oder den Kunden bedarf. 
                            Die Volkswagen AG wird den Kunden rechtzeitig vor dem Ende der Dienstlaufzeit per E-Mail an eine Verlängerung erinnern. Hierzu kann der Kunde auf dem Car-Net Portal eine (Neu-) Bestellung
                            der mobilen Online-Dienst zu den dann geltenden Laufzeiten und Konditionen vornehmen.
                        </p>
                        <button className="btn--primary">Car-Net Vertrag <br/> abschließen</button>
                    </section>
                </div>
            )
        } else {
            return <Spinner />;
        }
    }
}

export default Services