const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SIGNIN":
            return {
                user: action.payload,
            };
        case "SIGNUP":
            return {
                user: action.payload,
            };
        case "SIGNOUT":
            return {
                user: null,
            };
        default:
            return state;
    }
};

export { AuthReducer };
