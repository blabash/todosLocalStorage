import { connect } from "react-redux"
import StepList from './step_list'
import { receiveStep } from "../../actions/step_actions";
import { stepsByTodoId } from "../../reducers/selectors";

const mapStateToProps = (state, {todo_id}) => {
    return {
        steps: stepsByTodoId(state, todo_id),
        todo_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receiveStep: (step) => dispatch(receiveStep(step))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList)
