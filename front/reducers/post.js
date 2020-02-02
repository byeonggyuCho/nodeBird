



export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'cater',
        },
        content: '첫 번째 게시글',
        img: ''
    }],
    imagePaths: [],
};


const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'cater',
            content: '첫번째 글',
        }
    }],
}

export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';


const addPost = {
    type: ADD_POST,
};


const addMummy = {

    type: ADD_DUMMY,
    data: {
        constent: 'Hello',
        UserId: 1
        User: {
            nickname: 'cater'
        }
    }
};


const reduccr = (state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export default reducer