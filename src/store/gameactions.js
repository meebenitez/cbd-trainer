import { store } from '../index'


const CALLS = [
    { 
        details: ["21 y/o M", "Complaining of chest pain", "Profuse sweating", "Experiencing Dizziness", "Feels short of breath but can speak complete sentences"], 
        result: {response: "BLS", codes: ["7R1"]}
    },
    { 
        details: ["38 y/o F", "Nauseau and vomitting", "headache", "describes headache as the worst one of her life"], 
        result: {response: "BLS", codes: ["12M7"]}
    },
    { 
        details: ["28 y/o F", "36 weeks pregnant", "At home and started contractions", "Contractions are 3-4 minutes apart", "First pregnancy", "Says nearest hospital is 1 hr minutes away"], 
        result: {response: "BLS", codes: ["15R2"]}
    },
    { 
        details: ["65 y/o M", "Short of breath with difficulty speaking complete sentences", "Rapid heartrate", "Dizziness", "Stomach and chest pain"], 
        result: {response: "ALS", codes: ["7R1"]}
    },
    { 
        details: ["10 y/o M", "Fell off skateboard", "Says he can't move his arm, that it's too painful", "Possible fracture"], 
        result: {response: "BLS", codes: ["24R7"]}
    },
    { 
        details: ["18 y/o F", "Unconscious", "Not breathing"], 
        result: {response: "ALS", codes: ["19M1"]}
    },
    { 
        details: ["38 y/o F", "dry heaving and nausea", "sharp flank pain"], 
        result: {response: "BLS", codes: ["1R3"]}
    },
    { 
        details: ["42 y/o F", "Chest pain and short of breath", "Difficulty breathing but able to speak with complete sentences", "Tingling in left arm"], 
        result: {response: "BLS", codes: ["7M3"]}
    },
    { 
        details: ["26 y/o M", "Possible Alcohol Overdose", "Unconscious but breathing", "Can't be shaken awake", "Weak pulse"], 
        result: {response: "ALS", codes: ["14M1"]}
    },
    { 
        details: ["5 month old M (infant)", "Had a seizure that lasted for 2 minutes", "No longer seizing", "Has an underarm temp of 103F"], 
        result: {response: "BLS", codes: ["20R2"]}
    },
]


export const loadCalls = () => {
    return (dispatch, getState) => {
        debugger;
    }

}

export const loadGame = () => {
    return {
       type: 'REDUCER_ACTION_NAME'
    }

}

export const submitAnswer = (answer) => {
    return (dispatch) => {
        debugger;
    }
}

export const setPageImg = (page) => {
    return (dispatch) => {
        dispatch({type: 'SAVE_PAGE', pageImg: page})
    }
}