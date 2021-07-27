import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSubmitMessage: (formData) => {

            let action = addMessageActionCreator(formData.message);
            dispatch(action);
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

