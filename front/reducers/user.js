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
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


export const signUp = (data) => {
    return {
        type: SIGN_UP_REQUEST,
        data
    }
}

export const signUpAction = (data) => {
    return {
        type: SIGN_UP_REQUEST,
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
    type: LOG_OUT_SUCCESS,
};


// reducer
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyData // action.data
            }
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
        case SIGN_UP_REQUEST: {
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