import { connect } from "react-redux";
import { receiveStep, removeStep } from "../../actions/step_actions";
import StepListItem from "./step_list_item";

const mapDispatchToProps = (dispatch, { step }) => {
    return {
        receiveStep: step => dispatch(receiveStep(step)),
        removeStep: () => dispatch(removeStep(step))
    }
}

export default connect(null, mapDispatchToProps)(StepListItem)