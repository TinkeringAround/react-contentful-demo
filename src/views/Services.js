import React, { Component } from 'react'
import Service from "../components/Service";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/hmi.scss";
import "../styles/services.scss";

const FINs = ["WVWZZZAUZJW000001", "WVWZZZAUZJW000002", "WVWZZZAUZJW000003"]

class Services extends Component {
    state = {
        services: "",
        activeIndex: 0,
        modus: "desktop",
        desktop: "",
        hmi: "",
        hmiService: ""
      };

    componentDidMount() {
        this.fetchData();
        this.fetchServiceById('nymVB60QpwseC0eEkyEck');
        this.setState({ activeIndex: FINs.indexOf(this.props.match.params.id)})

      }

    componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.fetchServiceById('nymVB60QpwseC0eEkyEck');
    this.fetchData();
    }

    toggleModus() {
        this.setState({
          modus: this.state.modus === "desktop" ? "car" : "desktop"
        });
      }
    
    
    fetchData() {
        const { match } = this.props
        let entriesByFin = {
            "WVWZZZAUZJW000001":[ "63SegZ72j6c8csiqMg8SGo"],
            "WVWZZZAUZJW000002": ["17J33bHrAWIEaMqICcOKes"],
            "WVWZZZAUZJW000003": ["17J33bHrAWIEaMqICcOKes", "6bFO4WVQIgeMYE2qOcmSWQ"]
        }
        let entriesIds = [entriesByFin[match.params.id]][0]
        let servicesArr = []

        return entriesIds.map(entryId => {
            return this.props.contentful.getEntry(entryId, { locale: this.props.locale})
            .then(entry => {
                if (entry) {
                    servicesArr.push(entry)
                } else {
                throw new Error("Could not fetch any data from Contentful.");
            }
            servicesArr.sort(function(a, b){
                if(a.fields.name < b.fields.name) { return -1; }
                if(a.fields.name > b.fields.name) { return 1; }
                return 0;
            })
            this.setState({ services: servicesArr })
            }).catch(error => { console.log(error) });
        })
    }

    fetchServiceById (Id) {
        return this.props.contentful.getEntries({
            content_type: 'service',
            locale: this.props.locale,
            'sys.id': Id
        }).then(entry => { 
            this.setState({ hmiService: entry.items[0].fields }) 
        }).catch(err => console.log(err))

    }

    toggleActiveClass(index) {
        this.setState({ activeIndex: index });
    }

    renderHMI() {
        const { hmiService } = this.state
        return (
            <div id="services">
                <div id="hmi">
                    <div className="hmi-wrapper">
                        <article>
                            <div className="text-icon-wrapper">
                                <img className="icon hmi--icon" src={hmiService.icon.fields.file.url}  alt={hmiService.icon.fields.title} />
                                <span className="title">{hmiService.name}</span>
                            </div>
                            <p className="description">{hmiService.description}</p>
                            <div className="hmi--footer">
                                <hr className="divider"/>
                                <p className="text--back">Zurück</p>
                            </div>
                        </article>   
                    </div>
                </div>
                <Footer
                    toggleModus={this.toggleModus.bind(this)}
                    icon={this.state.modus  === "desktop" ? "car" : "desktop"}
                />
            </div>
        )
    }

    renderDesktop(renderSelection, renderServices) {
        return (
            <div id="services">
                {this.state.showModal ? this.renderModal : null}
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
                        {renderSelection}
                    </div>
                    <br />
                    <br />
                    {renderServices}

                    <p className="text-grey">
                        Hinweis: Je nach Ausstattung Ihres Fahrzeugs und Land, in dem Sie sich befinden, stehen ggf. nicht alle (Teil-) Funktionen zur Verfügung.
                    </p>
                </div>

                <section className={this.state.modus === "car"  ? "article" : "agb-submit content-wrapper"}>
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
                <Footer
                    toggleModus={this.toggleModus.bind(this)}
                    icon={this.state.modus  === "desktop" ? "car" : "desktop"}
                />
            </div>
        )
    }

    render () {
        const renderSelection = FINs.map((item, index) => {
            return (
                <Link to={'/services/' + item + '/' + this.props.locale} key={index} onClick={this.toggleActiveClass.bind(this, index)}>
                    <div className={this.state.activeIndex === index ? 'select-item active' : 'select-item'}>
                        <i className="fas fa-car-side fa-2x"></i>
                        <p>{item}</p>
                    </div>
                 </Link>
            )
        })

        if(this.state.modus === "car") {
            if (this.state.hmiService !== "") {
                return this.renderHMI()
            }
        } else {
            if (this.state.services !== "") {
                const renderServices = this.state.services.map((item, index) => {
                    return (
                        <Service service={item.fields} key={index} renderModal={this.renderModal} />
                    )
                })
                return this.renderDesktop(renderSelection, renderServices)
            } else {
                return <Spinner />;
            }
        }
    }
}

export default Services