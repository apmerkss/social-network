let initialState = {
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
            id: 6, link: '/users', text: 'Users'
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
}

const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer;
