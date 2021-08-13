import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/man.png";
import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {

        this.setState({
                editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )

        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
                status: e.target.value
            }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
           if(this.props.status !== prevProps.status) {
               this.setState({
                        status: this.props.status
                   }
               )
           }
    }


    render() {
        return (
            <div className={s.status}>
                {this.state.editMode 
                    ? <input onBlur={this.deactivateEditMode} autoFocus={true} onChange={this.onStatusChange} type="text" value={this.state.status}/>
                    : <span onDoubleClick={(e) => this.activateEditMode(e)}>{this.props.status || '--status--'}</span>
                }
            </div>
        )
    }
}

export default ProfileStatus;
