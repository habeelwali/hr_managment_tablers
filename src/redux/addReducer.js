const initialState =[
    {id:1,name:"habeel wali" ,email:"habeelwal3@gmail.com", contact :"03465560289"},
    {id:2,name:"waleed" ,email:"waleed@gmail.com", contact :"0311998898"}
]
const addReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "ADD_USER":
            state= [...state, action.payload];
            return state;
            case "UPDATE_USER":
           const updateState = state.map(list=>list.id===action.payload.id?action.payload:list)
            return updateState;
        default:
            return state;
    }

}
export default addReducer