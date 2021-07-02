import './App.scss';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <main className='content'>
                <NavbarContainer />
                <article>
                    <Route path='/dialogs'>
                        <DialogsContainer />
                    </Route>

                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </article>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
