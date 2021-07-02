import s from './Header.module.css';

const Header = () => {
    return (
            <header className={s.header}>
                <div className={s.container}>
                    <img className={s.logo} src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt=""/>
                </div>
            </header>
        )
}

export default Header;
