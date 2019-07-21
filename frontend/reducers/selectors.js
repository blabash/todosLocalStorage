export const allTodos = ({todos}) => {
    return Object.keys(todos).map(id => todos[id])
}

export const stepsByTodoId = ({ steps }, todo_id) => {
    let matchingSteps = []
    for(let key in steps) {
        if (steps[key].todo_id === todo_id) {
            matchingSteps.push(steps[key])
        }
    }
    // console.log(matchingSteps, 'hi mom')
    return matchingSteps
}

// export const stepsByTodoId = ({ steps }, todo_id) => {
//     console.log(steps)
//     const stepsByTodoId = [];
//     Object.keys(steps).forEach(stepId => {
//         const step = steps[stepId];
//         if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step)
//     })
//     console.log(stepsByTodoId)
//     return stepsByTodoId;
// };