const userReducer = (users = [], action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...users, data: action.payload, }
        case 'SET_SELECTED_USER':
            return { ...users, data: users.data.map((user) => ({ ...user, selected: user._id === action.payload, })) }
        default:
            return users;
    }
}


export default userReducer;