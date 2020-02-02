const dummyData = {
    nockName: 'cater',
    Post: [],
    Followings: [],
    Followers: [],
    signUpdata: []
}


// 초기값
export const initalState = {
    isLoggedIn: false,
    use: null,
};


// action Name
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';


export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data: data,
    };
};

export const loginAction = {
    type: LOG_IN,
    data: {
        nickname: 'cater'
    }
};


const logoutAction = {
    type: LOG_OUT,
};


// reducer
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyData // action.data
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpdata: action.data,
            }
        }
        default: {
            return {
                ...state
            }
        }
    };
}

export default reducer;