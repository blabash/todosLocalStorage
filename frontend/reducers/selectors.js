export const allTodos = ({todos}) => {
    return Object.keys(todos).map(id => todos[id])
}

export const stepsByTodoId = ({steps}, todoId) => {
    let matchingSteps = []
    for(let key in steps) {
        if (steps[key].todoId === todoId) matchingSteps.push(steps[key])
    }
    return matchingSteps
}
