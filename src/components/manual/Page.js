import React, { Component } from 'react';
import './Manual.css';
import Select from 'react-select';

const pages = [
    {label: "Abdominal / Back / Groin Pain", value: "abdominal2.PNG"},
    {label: "Anaphylaxis / Allergic Reaction", value: "anaphylaxis2.PNG"},
    {label: "Infectious Disease", value: "infectious_disease2.PNG"},
    {label: "Bleeding (Non-traumatic)", value: "bleeding_nontrauma2.PNG"},
    {label: "Breathing Difficulty", value: "breathingdx2.PNG"},
    {label: "Cardiac Arrest", value: "cardiac_arrest2.PNG"},
    {label: "Chest Pain / Discomfort / Heart Problems", value: "chest_pain2.PNG"},
    {label: "Choking", value: "choking2.PNG"},
    {label: "Diabetic", value: "diabetic2.PNG"},
    {label: "Environmental / Toxic Exposure", value: "environmental2.PNG"},
    {label: "Medical Knowledge", value: "medical_knowledge2.PNG"},
    {label: "Head / Neck", value: "head_neck2.PNG"},
    {label: "Mental / Emotional / Psychological", value: "mental2.PNG"},
    {label: "Overdose / Poisoning", value: "od2.PNG"},
    {label: "Pregnancy / Childbirth / Gyn", value: "pregnancy2.PNG"},
    {label: "Seizures", value: "seizures2.PNG"},
    {label: "Sick (Unknown) / Other", value: "sick2.PNG"},
    {label: "Stroke (CVA)", value: "stroke2.PNG"},
    {label: "Unconscious / Unresponsive / Syncope", value: "uncx2.PNG"},
    {label: "Pediatric Emergencies", value: "pediatric2.PNG"},
    {label: "Assault / Trauma", value: "assault2.PNG"},
    {label: "Burns - Thermal / Electrical / Chemical", value: "burns2.PNG"},
    {label: "Drowning / Near Drowning / Diving or Water-related Injury", value: "drowning2.PNG"},
    {label: "Falls / Accidents / Pain", value: "falls2.PNG"},
    {label: "Motor Vehicle Accident (MVA)", value: "mva2.png"},
    {label: "Animal Bites", value: "animal_bites2.PNG"}

]

class Page extends Component {
  constructor(props) {
    super();
    this.state = {
        selection: null,
        pageImg: null,
    }

}

componentWillMount(){
    if (this.props.savedPage) {
        this.setState({
            ...this.state,
            pageImg: this.props.savedPage
        })
    }
}

 

   
    handleSelect = (selection) => {
        this.setState({
            pageImg: selection.value
        }, this.props.setPageImg(selection.value))
    }

    render() {
        const { selection } = this.state;
        return (
        <div>
            <Select 
                options={pages}
                value={selection}
                onChange={this.handleSelect}
                autoFocus={true} />
            <div className="page-holder">{this.state.pageImg ? <img src={`img/pages/${this.state.pageImg}`} height='600px'/> : null } </div>
        </div>
        );
    }
}


export default Page;
