import { RECEIVE_STEPS,
         RECEIVE_STEP,
         REMOVE_STEP } from "../actions/step_actions";

const stepsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = {}

    switch (action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach(step => {
                newState[step.id] = step
            })        
            return newState
        case RECEIVE_STEP:
            let newStep = {[action.step.id]: action.step}
            return {...state, ...newStep}
        case REMOVE_STEP:
            newState = {...state}
            delete newState[action.step.id]
            return newState
        default:
            return state;
    }
}

export default stepsReducer