import React, { Component } from 'react';
import './Manual.css';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';

const pages = [
    {label: "Abdominal / Back / Groin Pain", value: "Abdominal / Back / Groin Pain"},
    {label: "Anaphylaxis / Allergic Reaction", value: "Anaphylaxis / Allergic Reaction"},
    {label: "Infectious Disease", value: "Infectious Disease"},
    {label: "Bleeding (Non-traumatic)", value: "Bleeding (Non-traumatic)"},
    {label: "Breathing Difficulty", value: ""},
    {label: "Cardiac Arrest", value: ""},
    {label: "Chest Pain / Discomfort / Heart Problems", value: ""},
    {label: "Choking", value: ""},
    {label: "Diabetic", value: ""},
    {label: "Environmental / Toxic Exposure", value: ""},
    {label: "Medical Knowledge", value: ""},
    {label: "Head / Neck", value: ""},
    {label: "Mental / Emotional / Psychological", value: ""},
    {label: "Overdose / Poisoning", value: ""},
    {label: "Pregnancy / Childbirth / Gyn", value: ""},
    {label: "Seizures", value: ""},
    {label: "Sick (Unknown) / Other", value: ""},
    {label: "Stroke (CVA)", value: ""},
    {label: "Unconscious / Unresponsive / Syncope", value: ""},
    {label: "Pediatric Emergencies", value: ""},
    {label: "Assault / Trauma", value: ""},
    {label: "Burns - Thermal / Electrical / Chemical", value: ""},
    {label: "Drowning / Near Drowning / Diving or Water-related Injury", value: ""},
    {label: "Falls / Accidents / Pain", value: ""},
    {label: "Motor Vehicle Accident (MVA)", value: ""},
    {label: "Animal Bites", value: ""}



















]

class Page extends Component {
  constructor() {
    super();
    this.state = {
        selection: null
    }

}

 

   
    handleSelect = (selection) => {
        console.log(selection.value)
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
        </div>
        );
    }
}


export default Page;
