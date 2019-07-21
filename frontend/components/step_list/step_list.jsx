import React from 'react'
import StepListItemContainer from "./step_list_item_container";

function StepList({ steps, todo_id, receiveStep }) {
    console.log(steps)
    const stepItems = steps.map(step => {
        return <StepListItemContainer 
                    key={step.id} 
                    step={step}/>
    })

    return (
        <div>
            <ul>
                { stepItems }
            </ul>
        </div>
    )
}

export default StepList
