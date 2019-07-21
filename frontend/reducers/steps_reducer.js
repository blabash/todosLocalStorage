import { RECEIVE_STEPS,
         RECEIVE_STEP,
         REMOVE_STEP } from "../actions/step_actions";

const initialState = {
    1: {
        id: 1,
        todo_id: 1,
        title: 'with soap',
        body: 'use the new stuff u just bought at the store',
        done: false
    },
    2: {
        id: 2,
        todo_id: 2,
        title: 'with shampoo',
        body: 'dont forget the flea stuff',
        done: true
    },
    3: {
        id: 3,
        todo_id: 1,
        title: 'wax too',
        body: '3 coats wax for the lambo',
        done: true
    }//for store testing
}

const stepsReducer = (state = initialState, action) => {
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