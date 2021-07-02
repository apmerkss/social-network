import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Taki spavu', likesCount: 12},
                {id: 2, message: 'It\'s time to go futher', likesCount: 23},
                {id: 3, message: 'I like apples', likesCount: 4}
            ],
            newPostText: 'itkamama',
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tom'},
                {id: 2, name: 'Den'},
                {id: 3, name: 'Maks'},
                {id: 4, name: 'Marta'}
            ],

            messages: [
                {id: 1, message: 'Hiiiii', name: 'Tom', date: '2004-07-24T18:18'},
                {id: 2, message: 'Yo', name: 'Ben', date: '2004-07-24T18:18'},
                {id: 3, message: 'what\'s up?', name: 'Shon', date: '2004-07-24T18:18'},
                {id: 4, message: 'How are you?', name: 'Kent', date: '2004-07-24T18:18'}
            ],
            newMessageText: 'Hi',
        },

        sidebar: {
            links: [
                {
                    id: 1, link: '/profile', text: 'Profile'
                },
                {
                    id: 2, link: '/dialogs', text: 'Messages'
                },
                {
                    id: 3, link: '/news', text: 'News'
                },
                {
                    id: 4, link: '/music', text: 'Music'
                },
                {
                    id: 5, link: '/settings', text: 'Settings'
                }
            ],
            friends: [
                {id: 1, name: 'Tom'},
                {id: 2, name: 'Den'},
                {id: 3, name: 'Maks'}
            ]
        },

    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;
