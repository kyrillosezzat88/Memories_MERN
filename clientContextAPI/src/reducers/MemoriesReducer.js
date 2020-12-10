const MemoriesReducer =  (state , action) => {
    switch (action.type) {
        case "FETCH_ALL":
        case "LIKE_POST":
            return{
                ...state,
                posts:action.payload
            }
        case "CREATE_POST":
            return{
                ...state,
                posts:[...state.posts , action.payload]
            }
        case "SET_CURRENT_ID":
            return {
                ...state,
                CurrentID:action.payload
            }
        case "CLEAR_CURRENT_ID":
            return{
                ...state,
                CurrentID:null
            }
        case 'DELETE_POST':
            return{
                ...state,
                posts:state.posts.filter(post => post._id !== action.payload)
            }
        default:
            return state
    }
}
export default MemoriesReducer;