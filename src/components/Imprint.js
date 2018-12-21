import React, { Component } from 'react';
import RichtText from './richtext';
import Section from './contentBlock';

class Imprint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: ""
        };
    }

    componentDidMount() {
        this.props.contentful.getEntries({
            'content_type': "impressum",
            'locale': this.props.locale
        }).then( (entries) => {

            this.setState({
                entry: entries.items[0].fields
            });
            console.log(this.state.entry);
        });
    }

    renderSections() {
        const sections = this.state.entry.sections.map((section) => ( <Section contentBlock={section}/>));
        return(
            <article className="column is-8 content">
            {sections}
            </article>
        )
    }

    render() {
        var sections = "";

        if (this.state.entry !== ""){
            sections = this.renderSections();
        }
        
        return (
            <div>
                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered">
                                { this.state.entry.title }
                            </h1>
                        </div>
                    </div>
                </section>
                <br/>
                <section className="hero">
                    <div className="hero-body columns is-centered is-multiline">
                        <article className="column is-8 content">
                            <h2 className="title"> { this.state.entry.header } </h2>
                            <RichtText richtext={this.state.entry.intro} />
                        </article>
                        {sections}
                    </div>
                </section>
            </div>
        );
    }
}

export default Imprint;