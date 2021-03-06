const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageText = action.newMessageText;
            let newMessage = {
                id: 5,
                message: newMessageText,
                name: 'Your name',
                date: ''
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;
