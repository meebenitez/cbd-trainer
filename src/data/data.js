export const pages = [
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

export const calls = [
    { 
        id: 1,
        details: ["21 y/o M", "Complaining of chest pain", "Profuse sweating", "Experiencing Dizziness", "Feels short of breath but can speak complete sentences"], 
        result: {response: "BLS", codes: ["7R1"]},
        pages:["Chest Pain / Discomfort / Heart Problems", "Breathing Difficulty"]
    },
    { 
        id: 2,
        details: ["38 y/o F", "Nauseau and vomitting", "headache", "describes headache as the worst one of her life"], 
        result: {response: "ALS", codes: ["12M7"]},
        pages:["Head / Neck"]
    },
    { 
        id: 3,
        details: ["28 y/o F", "36 weeks pregnant", "At home and started contractions", "Contractions are 3-4 minutes apart", "First pregnancy", "Says nearest hospital is 1 hr minutes away"], 
        result: {response: "BLS", codes: ["15R2"]},
        pages:["Pregnancy / Childbirth / Gyn"]
    },
    {   
        id: 4,
        details: ["65 y/o M", "Short of breath with difficulty speaking complete sentences", "Rapid heartrate", "Dizziness", "Stomach and chest pain"], 
        result: {response: "ALS", codes: ["7R1"]},
        pages:["Chest Pain / Discomfort / Heart Problems", "Breathing Difficulty"]
    },
    { 
        id: 5,
        details: ["10 y/o M", "Fell off skateboard", "Says he can't move his arm, that it's too painful", "Possible fracture"], 
        result: {response: "BLS", codes: ["24R7"]},
        pages:["Falls / Accidents / Pain"]
    },
    { 
        id: 6,
        details: ["18 y/o F", "Unconscious", "Not breathing"], 
        result: {response: "ALS", codes: ["19M1"]},
        pages:["Unconscious / Unresponsive / Syncope", "Breathing Difficulty"]
    },
    { 
        id: 7,
        details: ["38 y/o F", "dry heaving and nausea", "sharp flank pain"], 
        result: {response: "BLS", codes: ["1R3"]},
        pages:["Abdominal / Back / Groin Pain"]
    },
    { 
        id: 8,
        details: ["42 y/o F", "Chest pain and short of breath", "Difficulty breathing but able to speak with complete sentences", "Tingling in left arm"], 
        result: {response: "BLS", codes: ["7M3"]},
        pages:["Chest Pain / Discomfort / Heart Problems", "Breathing Difficulty"]
    },
    { 
        id: 9,
        details: ["26 y/o M", "Possible Alcohol Overdose", "Unconscious but breathing", "Can't be shaken awake", "Weak pulse"], 
        result: {response: "ALS", codes: ["14M1"]},
        pages:["Unconscious / Unresponsive / Syncope", "Overdose / Poisoning"]

    },
    { 
        id: 10,
        details: ["5 month old M (infant)", "Had a seizure that lasted for 2 minutes", "No longer seizing", "Has an underarm temp of 103F"], 
        result: {response: "BLS", codes: ["20R2"]},
        pages:["Pediatric Emergencies"]
    },
]