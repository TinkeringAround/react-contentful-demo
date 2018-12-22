import React, { Component } from 'react';
import Section from './contentBlock';
import RichText from './richtext';

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
        const sections = this.state.entry.sections.map((section) => ( <p><Section header={section.fields['header']} content={section.fields['content']}/><br /></p> ));

        return(
            <div className="column is-8">
                {sections}
            </div>
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
                        <h1 className="title has-text-centered">
                            { this.state.entry.title }
                        </h1>
                    </div>
                </section>
                <section className="hero">
                    <div className="hero-body columns is-centered is-multiline">
                        <div className="column is-8 content">
                            <h2>{ this.state.entry.header }</h2>
                            <RichText richtext={this.state.entry.intro}/>
                        </div>
                        {sections}
                    </div>
                </section>
            </div>
        );
    }
}

export default Imprint;