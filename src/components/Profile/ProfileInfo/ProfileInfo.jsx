import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
            <div>
                <img className={s.banner} src="https://source.unsplash.com/DLwUVlzrP0Q/1600x250" alt=""/>
                <div className={s.wrapper}>
                    <img className={s.avatar} src="https://source.unsplash.com/IMYvZjlX3jE/150x150" alt=""/>
                    <div className={s.info}>
                        <h1>Pavel Mulyar</h1>
                        DOB: 16.09.1992 <br/>
                        City: Vinnytsia <br/>
                        Position: Frontend-Developer <br/>
                    </div>
                </div>
            </div>
    )
}

export default ProfileInfo;
