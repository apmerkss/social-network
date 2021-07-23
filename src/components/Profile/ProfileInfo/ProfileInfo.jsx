import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/man.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profileInfo) {
        return  <Preloader/>
    }
    return (
            <div>
                <img width="967" height="157" className={s.banner} src="https://source.unsplash.com/DLwUVlzrP0Q/1600x250" alt=""/>
                <div className={s.wrapper}>
                    <img className={s.avatar} src={props.profileInfo.photos.small ? props.profileInfo.photos.small : userPhoto } alt="avatar" width='75' height="75"/>
                    <div className={s.info}>

                        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                        <hr/>
                        <h1>{props.profileInfo.fullName}</h1>
                        {props.profileInfo.aboutMe && props.profileInfo.aboutMe }

                        DOB: 16.09.1992 <br/>
                        City: Vinnytsia <br/>
                        Position: Frontend-Developer <br/>

                    </div>
                </div>
            </div>
    )
}

export default ProfileInfo;
