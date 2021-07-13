import './App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <main className='content'>
                <NavbarContainer />
                <article>
                    <Route path='/dialogs'>
                        <DialogsContainer />
                    </Route>
                    <Route path='/profile/:userID?' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/login' render={() => <Login />}/>
                </article>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
