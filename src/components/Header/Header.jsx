import s from './Header.module.css';

const Header = () => {
    return (
            <header className={s.header}>
                <div className={s.container}>
                    <img className={s.logo} src="https://img.icons8.com/ios-filled/100/ffffff/marriott-hotels.png" alt=""/>
                </div>
            </header>
        )
}

export default Header;
