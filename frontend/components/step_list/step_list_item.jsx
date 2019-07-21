import React from 'react'

function StepListItem({ receiveStep, removeStep, step }) {
    let toggleDone = (step) => {
        const toggledStep = Object.assign(
            {},
            step,
            {done: !step.done}
        )
        // step.done = !step.done
        receiveStep(toggledStep)
    }
    console.log(step, 'derp')
    return (
        <li>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <button onClick={() => toggleDone(step)}>{step.done === false ? 'Done' : 'Undo'}</button>
            <button onClick={() => removeStep(step)}>Delete</button>
        </li>
    )
}

export default StepListItem